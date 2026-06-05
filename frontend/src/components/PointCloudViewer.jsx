import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const PointCloudViewer = ({ zoom = 1 }) => {
  const mountRef = useRef(null);
  const cameraRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.zoom = zoom;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [zoom]);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#F3F3F3");

    const gridHelper = new THREE.GridHelper(200, 50, 0x081726, 0xd4d4d8);
    scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);

    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      10000,
    );
    camera.position.set(0, 50, 100);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight,
    );
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const loader = new PCDLoader();
    loader.load(
      "http://localhost:5000/assets/simple_map.pcd",
      (points) => {
        points.material.color.setHex(0x081726);
        points.material.size = 2.0;
        points.geometry.rotateX(-Math.PI / 2);

        scene.add(points);

        const box = new THREE.Box3().setFromObject(points);
        const center = box.getCenter(new THREE.Vector3());
        controls.target.copy(center);
        camera.position.set(center.x, center.y + 100, center.z + 100);

        setIsLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading PCD:", error);
        setIsLoading(false);
      },
    );

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight,
      );
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-white/80 backdrop-blur px-6 py-3 rounded-full shadow-lg text-sm font-bold text-slate-700 animate-pulse">
            Connecting to LiDAR mapping stream...
          </div>
        </div>
      )}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};

export default PointCloudViewer;
