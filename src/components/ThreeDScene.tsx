import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useRef } from 'react';
import * as THREE from 'three';

export function ThreeDScene() {
  const groupRef = useRef();

  return (
    <Canvas shadows className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
      
      <motion.group
        ref={groupRef}
        initial={{ rotateX: 0.5, rotateY: -0.2 }}
        animate={{
          rotateX: 0.3,
          rotateY: -0.1,
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <Center>
          <Text3D
            font="/fonts/inter_bold.json"
            size={3}
            height={0.4}
            curveSegments={32}
            bevelEnabled
            bevelThickness={0.1}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            AI
            <meshStandardMaterial
              color="#FFA500"
              metalness={0.1}
              roughness={0.2}
            />
          </Text3D>
        </Center>
      </motion.group>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      {/* Background Elements */}
      <motion.mesh
        position={[3, 2, -2]}
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { duration: 1, delay: 0.2 }
        }}
      >
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#FFA500" opacity={0.9} transparent />
      </motion.mesh>

      <motion.mesh
        position={[-2, -1, -1]}
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { duration: 1, delay: 0.4 }
        }}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#808080" opacity={0.7} transparent />
      </motion.mesh>
    </Canvas>
  );
}