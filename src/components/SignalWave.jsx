import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, Sparkles } from "@react-three/drei";

function BlueprintProcess() {
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    const elapsed = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(elapsed * 0.35) * 0.05;
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  const gridLines = [];
  for (let i = -4; i <= 4; i += 1) {
    gridLines.push({
      key: `h-${i}`,
      points: [
        [-4, i * 0.45, 0],
        [4, i * 0.45, 0],
      ],
    });
    gridLines.push({
      key: `v-${i}`,
      points: [
        [i * 0.65, -2, 0],
        [i * 0.65, 2, 0],
      ],
    });
  }

  return (
    <>
      <ambientLight intensity={1.35} />
      <directionalLight color="#fff7ed" intensity={2.2} position={[0, 3, 4]} />
      <pointLight color="#8fb3a0" intensity={9} position={[-2.8, 1.6, 2]} />
      <pointLight color="#c08f5d" intensity={8} position={[2.6, -1.8, 2.5]} />

      <Float floatIntensity={0.45} rotationIntensity={0.14} speed={1.2}>
        <group ref={groupRef} rotation={[-0.58, 0, 0]}>
          {gridLines.map((line) => (
            <Line
              color="#8fb3a0"
              key={line.key}
              lineWidth={0.6}
              opacity={0.28}
              points={line.points}
              transparent
            />
          ))}

          <Line
            color="#476b78"
            lineWidth={2.4}
            points={[
              [-2.6, -1.2, 0.04],
              [2.45, -1.2, 0.04],
              [2.45, 1.15, 0.04],
              [-2.6, 1.15, 0.04],
              [-2.6, -1.2, 0.04],
            ]}
          />
          <Line
            color="#c08f5d"
            lineWidth={2}
            points={[
              [-1.45, -1.2, 0.08],
              [-1.45, 1.15, 0.08],
              [0.15, 1.15, 0.08],
              [0.15, -1.2, 0.08],
            ]}
          />
          <Line
            color="#8a6f4d"
            lineWidth={1.8}
            points={[
              [0.15, -0.2, 0.1],
              [2.45, -0.2, 0.1],
            ]}
          />
          <Line
            color="#8fb3a0"
            lineWidth={1.8}
            points={[
              [-2.1, 0.52, 0.1],
              [-0.15, 0.52, 0.1],
            ]}
          />
        </group>
      </Float>

      <Sparkles
        color="#f0c28f"
        count={42}
        noise={1.4}
        opacity={0.65}
        scale={[6.8, 3.2, 2.8]}
        size={1.7}
        speed={0.22}
      />
    </>
  );
}

function SignalWave() {
  return (
    <div className="signal-wave-card">
      <div className="signal-wave-copy">
        <p className="signal-wave-kicker">Painel visual</p>
        <h3>Planta, modelo e documentacao</h3>
        <p>
          Um espaco visual para reforcar o foco da Larissa em transformar
          informacao tecnica em projeto organizado, bonito e pronto para ser
          apresentado.
        </p>
      </div>

      <div className="signal-wave-canvas">
        <Canvas camera={{ fov: 34, position: [0, 0, 7.4] }} dpr={[1, 1.5]}>
          <color attach="background" args={["#f3efe7"]} />
          <fog attach="fog" args={["#f3efe7", 5, 12]} />
          <BlueprintProcess />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.25}
            enablePan={false}
            enableZoom={false}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default SignalWave;
