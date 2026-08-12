#!/bin/bash
# Hardening basico de servidor Linux — ejecutar como root en un sistema nuevo
set -euo pipefail

echo "[1/6] Actualizaciones"
apt update && apt upgrade -y

echo "[2/6] Firewall: solo puertos necesarios"
apt install -y ufw
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp comment 'SSH'
ufw allow 443/tcp comment 'HTTPS'
ufw allow 80/tcp comment 'HTTP'
ufw enable

echo "[3/6] SSH por llave"
sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
systemctl reload ssh

echo "[4/6] Usuario de aplicacion sin privilegios"
useradd -m -s /bin/bash appuser || true

echo "[5/6] Backups 3-2-1 (plantilla de crontab)"
mkdir -p /srv/backup
echo "30 3 * * * tar czf /srv/backup/etc-$(date +\\%F).tgz /etc >/dev/null 2>&1" | crontab -

echo "[6/6] Logs: rotacion y revisar auth"
install -d /var/log/seguridad
echo "Revisa a diario: journalctl -u ssh --since today"

echo "Listo. Verifica: ufw status, ssh -T por llave, backup restaurable."
