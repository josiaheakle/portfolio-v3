import * as React from "react";
import * as Three from "@react-three/fiber";
import { WaveParticle } from "./WaveParticle";

/**
 * 
 *   var cubes = [];

  for (var x = -25; x <= 35; x += 5) {
    for (var y = -30; y <= 30; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(4.4, 6, 4.4);
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x4d7ca2});
      var box = new THREE.Mesh(boxGeometry, boxMaterial);

      box.castShadow = true;

      box.position.x = x;
      box.position.y = 0;
      box.position.z = y;

      box.vy = .1;

      box.scale.y = .1 + Math.random() * .4;
      box.scale.oldY = box.scale.y;

      scene.add(box);
      cubes.push(box);
    }
  }

  document.body.appendChild(renderer.domElement);

  camera.position.set(55, 55, 80);
  camera.lookAt(scene.position);

  (function drawFrame(ts){
    requestAnimationFrame(drawFrame);
    renderer.render(scene, camera);
    cubes.forEach(function(c) {
      c.scale.y = Math.sin(ts / 600 + c.position.x / 12 + c.position.z / 23) + 1;
    });
  }());
 * 
 */

// init();
// animate();

interface WaveFormProps {}

const WaveForm: React.FC<WaveFormProps> = ({}) => {
	const [frame, setFrame] = React.useState(0);
	const [sphereScales, setSphereScales] = React.useState<Array<number>>([]);

	const spheres: Array<any> = [];

	Three.useThree(({ camera }) => {
		camera.position.set(0, 15, 50);
		camera.rotation.x = -0.1;
	});

	for (let x = -15; x < 20; x += 5) {
		for (let y = -15; y < 20; y += 5) {
			const sphere = { x: x, z: y, scale: 1 };
			setSphereScales([...sphereScales, 1]);
			// sphere.castShadow = true;
			// sphere.position.set(x, 0, y);
			spheres.push(sphere);
		}
	}

	Three.useFrame(() => {
		setFrame(frame + 1);
		const scales = sphereScales;
		spheres.forEach((s, i) => {
			scales[i] = Math.sin(frame / 600 + s.x / 12 + s.z / 23) + 1;
		});
		setSphereScales(scales);
	});

	return (
		<>
			{spheres.map((s, i) => (
				<WaveParticle
					key={i}
					position={[s.x, 0, s.z]}
					scale={sphereScales[i]}
				/>
			))}
		</>
	);
};

export { WaveForm };
