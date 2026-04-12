import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

function CoreScene() {
  const groupRef = useRef(null);
  const shellRef = useRef(null);
  const ringRef = useRef(null);

  useFrame((state, delta) => {
    const elapsed = state.clock.getElapsedTime();
    const pointerX = state.pointer.x * 0.35;
    const pointerY = state.pointer.y * 0.2;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.rotation.x = pointerY;
      groupRef.current.position.x = pointerX;
      groupRef.current.position.y = pointerY * 0.8;
    }

    if (shellRef.current) {
      shellRef.current.rotation.z += delta * 0.28;
      shellRef.current.rotation.x = elapsed * 0.15;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = elapsed * 0.45;
      ringRef.current.rotation.y = elapsed * 0.3;
    }
  });

  return (
    <>
      <color attach="background" args={["#071120"]} />
      <fog attach="fog" args={["#071120", 4, 11]} />
      <ambientLight intensity={1.15} />
      <pointLight color="#60a5fa" intensity={18} position={[2.5, 1.5, 2.8]} />
      <pointLight color="#38bdf8" intensity={12} position={[-2.8, -2, 2]} />

      <Float floatIntensity={0.9} rotationIntensity={0.55} speed={2.2}>
        <group ref={groupRef}>
          <mesh castShadow receiveShadow>
            <icosahedronGeometry args={[1.1, 18]} />
            <MeshDistortMaterial
              color="#93c5fd"
              distort={0.28}
              metalness={0.4}
              radius={1}
              roughness={0.08}
              speed={2.2}
              transparent
              opacity={0.95}
            />
          </mesh>

          <mesh ref={shellRef}>
            <icosahedronGeometry args={[1.48, 2]} />
            <meshBasicMaterial
              color="#38bdf8"
              transparent
              opacity={0.12}
              wireframe
            />
          </mesh>

          <mesh ref={ringRef} rotation={[1, 0.3, 0]}>
            <torusGeometry args={[1.9, 0.035, 16, 120]} />
            <meshStandardMaterial
              color="#bfdbfe"
              emissive="#60a5fa"
              emissiveIntensity={0.7}
              roughness={0.25}
              metalness={0.7}
            />
          </mesh>
        </group>
      </Float>

      <Sparkles
        color="#bfdbfe"
        count={70}
        noise={1.8}
        opacity={1}
        scale={[4.4, 4.4, 4.4]}
        size={2.8}
        speed={0.45}
      />
    </>
  );
}

function TechCore() {
  return (
    <div className="tech-core-card">
      <div className="tech-core-copy">
        <p className="tech-core-kicker">Visual interativo</p>
        <h3>Nucleo interativo</h3>
        <p>
          Uma teste de animação 3D para dar mais personalidade.
        </p>
      </div>

      <div className="tech-core-canvas">
        <Canvas camera={{ fov: 42, position: [0, 0, 5.4] }} dpr={[1, 1.5]}>
          <CoreScene />
        </Canvas>
      </div>
    </div>
  );
}

export default TechCore;
