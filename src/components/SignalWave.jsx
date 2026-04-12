import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, Sparkles, Trail } from "@react-three/drei";
function OrbitalSignal() {
  const orbRef = useRef(null);
  const orbitRef = useRef(null);
  const points = new Array(120).fill(null).map((_, index) => {
    const angle = (index / 120) * Math.PI * 2;
    const radius = 2.2 + Math.sin(angle * 3) * 0.16;

    return [Math.cos(angle) * radius, Math.sin(angle) * radius * 0.55, 0];
  });

  useFrame((state, delta) => {
    const elapsed = state.clock.getElapsedTime();

    if (orbitRef.current) {
      orbitRef.current.rotation.z += delta * 0.18;
      orbitRef.current.rotation.x = Math.sin(elapsed * 0.5) * 0.22;
    }

    if (orbRef.current) {
      orbRef.current.position.x = Math.cos(elapsed * 1.1) * 2.1;
      orbRef.current.position.y = Math.sin(elapsed * 2) * 0.82;
      orbRef.current.position.z = Math.sin(elapsed * 1.4) * 0.4;
    }
  });

  return (
    <>
      <ambientLight intensity={1.3} />
      <pointLight color="#60a5fa" intensity={20} position={[0, 0, 4]} />
      <pointLight color="#38bdf8" intensity={10} position={[-3, 2, 1]} />

      <group ref={orbitRef}>
        <Line
          color="#60a5fa"
          lineWidth={1.4}
          points={points}
          transparent
          opacity={0.7}
        />
        <mesh rotation={[0.9, 0.4, 0]}>
          <torusGeometry args={[1.4, 0.028, 16, 100]} />
          <meshStandardMaterial
            color="#bfdbfe"
            emissive="#60a5fa"
            emissiveIntensity={0.85}
            metalness={0.75}
            roughness={0.22}
          />
        </mesh>
      </group>

      <Float floatIntensity={0.9} rotationIntensity={0.2} speed={2}>
        <Trail
          attenuation={(width) => width}
          color="#93c5fd"
          length={5}
          local
          width={0.8}
        >
          <mesh ref={orbRef}>
            <sphereGeometry args={[0.22, 32, 32]} />
            <meshStandardMaterial
              color="#e0f2fe"
              emissive="#60a5fa"
              emissiveIntensity={1.4}
              metalness={0.4}
              roughness={0.1}
            />
          </mesh>
        </Trail>
      </Float>

      <Sparkles
        color="#bfdbfe"
        count={90}
        noise={1.6}
        opacity={0.9}
        scale={[7, 3.4, 4]}
        size={2.2}
        speed={0.4}
      />
    </>
  );
}

function SignalWave() {
  return (
    <div className="signal-wave-card">
      <div className="signal-wave-copy">
        <p className="signal-wave-kicker">Painel visual</p>
        <h3>Campo de sinal</h3>
        <p>
          Um fechamento mais visual para a pagina, mantendo a mesma identidade
          futurista do restante da interface.
        </p>
      </div>

      <div className="signal-wave-canvas">
        <Canvas camera={{ fov: 34, position: [0, 0, 7.4] }} dpr={[1, 1.5]}>
          <color attach="background" args={["#071120"]} />
          <fog attach="fog" args={["#071120", 5, 12]} />
          <OrbitalSignal />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.4}
            enablePan={false}
            enableZoom={false}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default SignalWave;
