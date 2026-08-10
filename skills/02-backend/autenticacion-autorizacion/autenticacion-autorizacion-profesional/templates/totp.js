/**
 * totp.js — MFA con TOTP según RFC 6238 (Node.js nativo, sin dependencias).
 *
 * Flujo:
 *   1. generarSecreto()            -> secreto base32 para el QR del usuario
 *   2. uriOtpauth(secreto, email)  -> URI para generar el QR (otpauth://)
 *   3. verificarCodigo(...)        -> valida el código de 6 dígitos
 *   4. generarRespaldo()           -> códigos de un solo uso de respaldo
 *
 * El secreto debe guardarse CIFRADO en la base de datos.
 */
const crypto = require('crypto');

const PASO_30S = 30; // ventana estándar de TOTP (RFC 6238)
const DIGITOS = 6;
const ALFABETO_BASE32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

// ---------------------------------------------------------------------------
// Utilidades base32 (para evitar dependencias externas)
// ---------------------------------------------------------------------------
function codificarBase32(buffer) {
  let bits = 0;
  let valor = 0;
  let salida = '';
  for (const byte of buffer) {
    valor = (valor << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      salida += ALFABETO_BASE32[(valor >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) {
    salida += ALFABETO_BASE32[(valor << (5 - bits)) & 31];
  }
  return salida;
}

function decodificarBase32(texto) {
  const limpio = texto.replace(/=+$/, '').toUpperCase();
  let bits = 0;
  let valor = 0;
  const bytes = [];
  for (const caracter of limpio) {
    const indice = ALFABETO_BASE32.indexOf(caracter);
    if (indice === -1) throw new Error('Carácter base32 inválido');
    valor = (valor << 5) | indice;
    bits += 5;
    if (bits >= 8) {
      bytes.push((valor >>> (bits - 8)) & 0xff);
      bits -= 8;
    }
  }
  return Buffer.from(bytes);
}

// ---------------------------------------------------------------------------
// TOTP (RFC 6238 / RFC 4226 HOTP)
// ---------------------------------------------------------------------------
/**
 * Genera un secreto TOTP de 20 bytes aleatorios en base32.
 * @returns {string}
 */
function generarSecreto() {
  return codificarBase32(crypto.randomBytes(20));
}

/**
 * Construye la URI otpauth:// para el QR de Google Authenticator o Authy.
 * @param {string} secreto Secreto base32
 * @param {string} email Cuenta que aparecerá en la app autenticadora
 * @param {string} [emisor] Nombre visible de la organización
 * @returns {string}
 */
function uriOtpauth(secreto, email, emisor = 'MiAplicacion') {
  const label = encodeURIComponent(`${emisor}:${email}`);
  return `otpauth://totp/${label}?secret=${secreto}&issuer=${encodeURIComponent(emisor)}&algorithm=SHA1&digits=${DIGITOS}&period=${PASO_30S}`;
}

/**
 * Calcula el código TOTP para un contador dado.
 * @param {Buffer} bufferHMAC Buffer del HMAC-SHA1 truncado
 * @returns {string} Código de 6 dígitos con ceros a la izquierda
 */
function truncar(bufferHMAC) {
  const offset = bufferHMAC[bufferHMAC.length - 1] & 0x0f;
  const codigo =
    ((bufferHMAC[offset] & 0x7f) << 24) |
    (bufferHMAC[offset + 1] << 16) |
    (bufferHMAC[offset + 2] << 8) |
    bufferHMAC[offset + 3];
  return String(codigo % 10 ** DIGITOS).padStart(DIGITOS, '0');
}

function calcularParaContador(secretoBase32, contador) {
  const clave = decodificarBase32(secretoBase32);
  const mensaje = Buffer.alloc(8);
  mensaje.writeBigUInt64BE(BigInt(contador));
  const hmac = crypto.createHmac('sha1', clave).update(mensaje).digest();
  return truncar(hmac);
}

/**
 * Verifica un código TOTP con tolerancia de ventanas.
 * @param {string} secreto Secreto base32 del usuario
 * @param {string} codigoIngresado Código de 6 dígitos enviado por el usuario
 * @param {number} [ventana] Tolerancia en ventanas de 30s hacia atrás/adelante
 * @returns {boolean}
 */
function verificarCodigo(secreto, codigoIngresado, ventana = 1) {
  if (!/^\d{6}$/.test(codigoIngresado)) return false;
  const contador = Math.floor(Date.now() / 1000 / PASO_30S);
  for (let desplazamiento = -ventana; desplazamiento <= ventana; desplazamiento += 1) {
    const candidato = calcularParaContador(secreto, contador + desplazamiento);
    if (candidato === codigoIngresado) return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// Códigos de respaldo de un solo uso
// ---------------------------------------------------------------------------
/**
 * Genera 10 códigos de respaldo aleatorios. Guárdalos hasheados (SHA-256)
 * y márcales fecha de caducidad y de uso.
 * @param {number} [cantidad] Número de códigos
 * @param {number} [longitud] Longitud de cada código
 * @returns {string[]}
 */
function generarRespaldo(cantidad = 10, longitud = 10) {
  const codigos = [];
  for (let i = 0; i < cantidad; i += 1) {
    const bytes = crypto.randomBytes(longitud);
    codigos.push(
      Array.from(bytes)
        .map((b) => ALFABETO_BASE32[b % 32])
        .join('')
        .slice(0, longitud)
    );
  }
  return codigos;
}

module.exports = {
  generarSecreto,
  uriOtpauth,
  verificarCodigo,
  generarRespaldo,
};