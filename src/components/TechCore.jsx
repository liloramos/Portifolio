import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";

function BimModelScene() {
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    const elapsed = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.22;
      groupRef.current.rotation.x = Math.sin(elapsed * 0.4) * 0.08;
      groupRef.current.position.y = Math.sin(elapsed * 0.7) * 0.05;
    }
  });

  const footprint = [
    [-1.5, -0.85, 0],
    [1.3, -0.85, 0],
    [1.3, 0.75, 0],
    [-1.5, 0.75, 0],
    [-1.5, -0.85, 0],
  ];

  const roof = [
    [-1.7, 0.88, 0],
    [-0.1, 1.55, 0],
    [1.5, 0.88, 0],
  ];

  return (
    <>
      <color attach="background" args={["#f3efe7"]} />
      <ambientLight intensity={1.4} />
      <directionalLight color="#fff7ed" intensity={2.4} position={[2, 3, 4]} />
      <pointLight color="#c08f5d" intensity={7} position={[-2, -1, 2.5]} />

      <Float floatIntensity={0.55} rotationIntensity={0.2} speed={1.4}>
        <group ref={groupRef} rotation={[-0.65, 0.2, 0]}>
          <mesh position={[0, 0, -0.08]}>
            <boxGeometry args={[2.8, 1.6, 0.16]} />
            <meshStandardMaterial color="#d8d1c3" roughness={0.75} />
          </mesh>
          <Line color="#476b78" lineWidth={1.7} points={footprint} />
          <Line color="#c08f5d" lineWidth={2.2} points={roof} />
          <Line
            color="#8fb3a0"
            lineWidth={1.5}
            points={[
              [-0.9, -0.85, 0.04],
              [-0.9, 0.75, 0.04],
            ]}
          />
          <Line
            color="#8fb3a0"
            lineWidth={1.5}
            points={[
              [0.25, -0.85, 0.04],
              [0.25, 0.75, 0.04],
            ]}
          />
          <Line
            color="#8a6f4d"
            lineWidth={1.5}
            points={[
              [-1.5, -0.18, 0.04],
              [1.3, -0.18, 0.04],
            ]}
          />
          <mesh position={[0.78, 0.22, 0.05]}>
            <boxGeometry args={[0.62, 0.44, 0.08]} />
            <meshStandardMaterial color="#f7f1e7" roughness={0.5} />
          </mesh>
        </group>
      </Float>

      <Sparkles
        color="#c08f5d"
        count={30}
        noise={1.2}
        opacity={0.55}
        scale={[4, 3, 2]}
        size={1.5}
        speed={0.25}
      />
    </>
  );
}

function TechCore() {
  return (
    <div className="tech-core-card">
      <div className="tech-core-copy">
        <p className="tech-core-kicker">Modelo tecnico</p>
        <h3>Leitura BIM</h3>
        <p>Uma representacao visual do caminho entre volume, planta e prancha.</p>
      </div>

      <div className="tech-core-canvas">
        <Canvas camera={{ fov: 38, position: [0, 0, 5.2] }} dpr={[1, 1.5]}>
          <BimModelScene />
        </Canvas>
      </div>
    </div>
  );
}

export default TechCore;
