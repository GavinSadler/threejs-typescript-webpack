
// Import three.js and also import classes for Typescript
import * as THREE from 'three';
import { Mesh, PerspectiveCamera, WebGLRenderer, Scene } from 'three';

// Import references to the assets used
import image_crate_gif from './textures/crate.gif';

let camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer;
let mesh: Mesh;

init();
animate();

function init() {

    // Create a new camera and position it
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 400;

    // Create the scene
    scene = new THREE.Scene();

    // Load the texture
    const texture = new THREE.TextureLoader().load(image_crate_gif);

    // Create a box and accompanying texture
    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Create a mesh out of the created geometry and material and add it to the scene
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Create a render context and adjust it to the window's size
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Set the page margin to 0
    document.body.style.margin = "0";

    // Add the canvas to the document
    document.body.appendChild(renderer.domElement);

    // This will update the camera aspect ratio and canvas size on window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    });

}

function animate() {

    // This will call the animation loop once more
    requestAnimationFrame(animate);

    // Rotate the box
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;

    // Render our scene
    renderer.render(scene, camera);

}