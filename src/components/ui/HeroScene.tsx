import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.18;
      mesh.current.rotation.y += delta * 0.28;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
      <Sphere ref={mesh} args={[1.2, 64, 64]} scale={1.15}>
        <MeshDistortMaterial
          color="#57db96"
          emissive="#2b5cff"
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.65}
          distort={0.34}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

export function HeroScene() {
  const canRenderWebGL =
    typeof window !== "undefined" && "WebGLRenderingContext" in window;

  if (!canRenderWebGL) {
    return <div className="hero-scene-fallback" aria-hidden="true" />;
  }

  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 42 }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 4, 5]} intensity={3} color="#ffffff" />
        <pointLight position={[-3, -2, 2]} intensity={8} color="#2b5cff" />
        <Orb />
      </Canvas>
    </div>
  );
}
