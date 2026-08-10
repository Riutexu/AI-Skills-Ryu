import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1026);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 2, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const material = new THREE.MeshStandardMaterial({ color: 0x4a9eff, roughness: 0.3, metalness: 0.4 });

const cubo = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
cubo.position.x = -1.6;
cubo.castShadow = true;

const esfera = new THREE.Mesh(new THREE.SphereGeometry(0.6, 32, 32), new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.15 }));
esfera.position.x = 0;
esfera.position.y = 0.6;
esfera.castShadow = true;

const plano = new THREE.Mesh(
  new THREE.PlaneGeometry(8, 8),
  new THREE.MeshStandardMaterial({ color: 0x222844, roughness: 0.9 })
);
plano.rotation.x = -Math.PI / 2;
plano.receiveShadow = true;

scene.add(cubo, esfera, plano);

const luzAmbiente = new THREE.AmbientLight(0xffffff, 0.6);
const luzPuntual = new THREE.PointLight(0xffffff, 40);
luzPuntual.position.set(3, 5, 4);
luzPuntual.castShadow = true;

scene.add(luzAmbiente, luzPuntual);

function animate() {
  requestAnimationFrame(animate);
  const t = Date.now();

  cubo.rotation.x = t * 0.001;
  cubo.rotation.y = t * 0.0015;

  esfera.position.y = 0.6 + Math.sin(t * 0.002) * 0.3;

  controls.update();
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});