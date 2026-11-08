import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";
import { useTheme } from "../../theme";

type SceneColors = {
  accent: string;
  secondary: string;
  ink: string;
};

function readSceneColors(): SceneColors {
  if (typeof document === "undefined") {
    return {
      accent: "#61e6a0",
      secondary: "#52c7d4",
      ink: "#f7f8ff",
    };
  }

  const styles = getComputedStyle(document.documentElement);
  return {
    accent: styles.getPropertyValue("--accent").trim(),
    secondary: styles.getPropertyValue("--accent-secondary").trim(),
    ink: styles.getPropertyValue("--ink").trim(),
  };
}

function OrbitRings({ colors }: { colors: SceneColors }) {
  const rings = useRef<Group>(null);

  useFrame((_, delta) => {
    if (rings.current) {
      rings.current.rotation.z += delta * 0.12;
      rings.current.rotation.x = Math.sin(performance.now() * 0.0005) * 0.12;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.45}>
      <group ref={rings} scale={1.15}>
        <Sphere args={[0.16, 32, 32]}>
          <meshStandardMaterial
            color={colors.accent}
            emissive={colors.accent}
            emissiveIntensity={1.8}
            roughness={0.15}
            metalness={0.35}
          />
        </Sphere>
        <Torus
          args={[1.2, 0.055, 16, 96]}
          rotation={[0, 0, 0]}
          scale={[1, 0.42, 1]}
        >
          <meshStandardMaterial
            color={colors.accent}
            emissive={colors.accent}
            emissiveIntensity={0.8}
            roughness={0.18}
            metalness={0.45}
          />
        </Torus>
        <Torus
          args={[1.2, 0.055, 16, 96]}
          rotation={[Math.PI / 3, 0, 0]}
          scale={[1, 0.42, 1]}
        >
          <meshStandardMaterial
            color={colors.secondary}
            emissive={colors.secondary}
            emissiveIntensity={0.8}
            roughness={0.18}
            metalness={0.45}
          />
        </Torus>
        <Torus
          args={[1.2, 0.055, 16, 96]}
          rotation={[-Math.PI / 3, 0, 0]}
          scale={[1, 0.42, 1]}
        >
          <meshStandardMaterial
            color={colors.accent}
            emissive={colors.accent}
            emissiveIntensity={0.8}
            roughness={0.18}
            metalness={0.45}
          />
        </Torus>
      </group>
    </Float>
  );
}

export function HeroScene() {
  const { theme } = useTheme();
  const [colors, setColors] = useState<SceneColors>(readSceneColors);
  const canRenderWebGL =
    typeof window !== "undefined" && "WebGLRenderingContext" in window;

  useEffect(() => {
    setColors(readSceneColors());
  }, [theme]);

  if (!canRenderWebGL) {
    return <div className="hero-scene-fallback" aria-hidden="true" />;
  }

  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 42 }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 4, 5]} intensity={3} color={colors.ink} />
        <pointLight position={[-3, -2, 2]} intensity={8} color={colors.secondary} />
        <OrbitRings colors={colors} />
      </Canvas>
    </div>
  );
}
