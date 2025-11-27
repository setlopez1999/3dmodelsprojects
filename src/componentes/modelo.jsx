//aqui importaremos el modelo pero por ahora hare que mande un cubito
import { useFrame } from '@react-three/fiber'
import { useState, useRef } from 'react';

// esto recibira props si quiero mandar algo desde el padre
export default function Modelo(props) {
  //const model = useLoader(GLTFLoader, '/modelo.glb');
  const { color, position, rotation, scale, glowIntensity, setGlowIntensity} = props;
  const [hovered, setHovered] = useState(false)
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) return;

    // escala objetivo (si hover = grande, sino normal)
    const target = hovered ? 1.4 : 1;
    meshRef.current.scale.lerp(
      {x: target,y: target,z: target},
      0.07
    );
    const targetGlow = hovered ? 3 : 0
    const smoothGlow = glowIntensity + (targetGlow - glowIntensity) * 0.1
    setGlowIntensity(smoothGlow)

  });

  return (
    <mesh ref={meshRef}
      onPointerOver={()=> setHovered(true)}
      onPointerOut={() => setHovered(false)}

      castShadow
      receiveShadow
      position={[0,0,0]  || {position}} 
      rotation={[0,0,0]  || {rotation}} 
      scale=   {[1,1,1]  || {scale}}>
      
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
      color={color || "orange"} 
      emissiveIntensity={glowIntensity}
      metalness={0.3} 
      //brillo
      roughness={0.2}/>
    </mesh>
  )
}