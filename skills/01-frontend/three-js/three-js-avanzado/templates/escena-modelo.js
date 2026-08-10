import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1026);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 4, 7);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

scene.add(new THREE.AmbientLight(0xffffff, 0.7));
const luz = new THREE.DirectionalLight(0xffffff, 2.2);
luz.position.set(6, 10, 4);
scene.add(luz);

const draco = new DRACOLoader();
const loader = new GLTFLoader();
loader.setDRACOLoader(draco);

const interactuables = [];
let modelo;

loader.load("/models/mi-modelo.glb", (gltf) => {
  modelo = gltf.scene;
  modelo.scale.setScalar(1.5);
  modelo.traverse((objeto) => {
    if (objeto.isMesh) {
      objeto.castShadow = true;
      interactuables.push(objeto);
    }
  });
  scene.add(modelo);
});

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const materialesOriginales = new Map();

renderer.domElement.addEventListener("pointermove", (evento) => {
  mouse.x = (evento.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(evento.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const aciertos = raycaster.intersectObjects(interactuables, false);

  for (const [mesh, material] of materialesOriginales) {
    mesh.material = material;
  }
  materialesOriginales.clear();
  renderer.domElement.style.cursor = "default";

  if (aciertos.length > 0) {
    const mesh = aciertos[0].object;
    materialesOriginales.set(mesh, mesh.material);
    mesh.material = mesh.material.clone();
    mesh.material.emissive = new THREE.Color(0x4a9eff);
    mesh.material.emissiveIntensity = 0.6;
    renderer.domElement.style.cursor = "pointer";
  }
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});