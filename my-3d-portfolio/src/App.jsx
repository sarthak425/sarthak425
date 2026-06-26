import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Cube() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#00ffff" />
      </mesh>
    </Float>
  );
}

export default function App() {
  return (
    <div style={{ height: "100vh", background: "#0f172a" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Cube />
        <OrbitControls />
      </Canvas>

      <h1
        style={{
          position: "absolute",
          top: "20%",
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "40px",
        }}
      >
        {"\u{1F680} Sarthak Khatpe"}
      </h1>
    </div>
  );
}
