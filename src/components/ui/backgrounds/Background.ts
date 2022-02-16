import * as THREE from "three";

export default class Scene {
	private scene: THREE.Scene;
	private camera: THREE.PerspectiveCamera;
	private renderer: THREE.WebGLRenderer;

	private cubes: Array<
		THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>
	>;
	private fog: THREE.Fog;

	private mainColor: THREE.ColorRepresentation;
	private contrastColor: THREE.ColorRepresentation;
	private backgroundColor: THREE.ColorRepresentation;

	constructor(
		mainColor: THREE.ColorRepresentation,
		lightUpColor: THREE.ColorRepresentation,
		backgroundColor: THREE.ColorRepresentation
	) {
		this.mainColor = mainColor;
		this.contrastColor = lightUpColor;
		this.backgroundColor = backgroundColor;
		this.initObjects();
		this.initScene();
		this.initFog();
		this.initCamera();
		this.initResize();
		this.initRenderer();
	}

	start() {
		this.updateCameraPosition(0, 10, 0);
		this.updateCameraRotationX(0);
		this.updateCameraRotationZ(0);
		this.updateCameraRotationY(0);
		this.createCube();
		this.createPlane(80, 50);
		this.createLight();
		this.animate();
	}

	initFog() {
		this.fog = new THREE.Fog(this.backgroundColor, 0.1, 50);
		this.scene.fog = this.fog;
	}

	initCamera() {
		this.camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			40
		);
	}

	initRenderer() {
		this.renderer = new THREE.WebGLRenderer({ alpha: true });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);
	}

	initScene() {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(this.backgroundColor);
	}

	initObjects() {
		this.cubes = [];
	}

	initDev() {
		const gridHelper = new THREE.GridHelper();
		this.scene.add(gridHelper);
	}

	initResize() {
		window.addEventListener("resize", (e) => this.updateWindowSize(e));
	}

	updateWindowSize(event: UIEvent) {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	createLight() {
		const light = new THREE.PointLight();
		light.castShadow = true;
		light.position.set(50, 20, 50);
		light.intensity = 1;
		this.scene.add(light);
	}

	createCube() {
		const geometry = new THREE.BoxGeometry(1000, 0.1, 1000);
		const material = new THREE.MeshStandardMaterial({
			color: this.backgroundColor,
		});
		const cube = new THREE.Mesh(geometry, material);
		cube.position.y = 0;

		this.scene.add(cube);
	}

	createPlane(width: number, height: number) {
		for (let x = -(width / 2); x < width / 2; x++) {
			for (let y = -height / 2; y < height / 2; y++) {
				const geometry = new THREE.BoxGeometry(1, 10, 1);
				const material = new THREE.MeshStandardMaterial({
					color: this.mainColor,
				});
				const box = new THREE.Mesh(geometry, material);
				box.position.set(x * 1.5, 0, y * 1.5);
				box.castShadow = true;
				this.scene.add(box);
				this.cubes.push(box);
			}
		}
	}

	updateCameraPosition(x: number, y: number, z: number) {
		this.camera.position.set(x, y, z);
	}

	updateCameraRotationX(x: number) {
		this.camera.rotation.x = x;
	}

	updateCameraRotationY(y: number) {
		this.camera.rotation.y = y;
	}

	updateCameraRotationZ(z: number) {
		this.camera.rotation.z = z;
	}

	animate(frame?: number) {
		requestAnimationFrame((ts) => this.animate(ts));
		this.cubes.forEach((cube) => {
			if (Math.floor(Math.random() * 10000) === 12) {
				cube.material.color.set(this.contrastColor);
				setTimeout(() => {
					cube.material.color.set(this.mainColor);
				}, 500);
			}
			cube.position.y = Math.sin(
				(frame || 0) / 600 + cube.position.x / 16 + cube.position.z / 12
			);
		});
		this.renderer.render(this.scene, this.camera);
	}
}
