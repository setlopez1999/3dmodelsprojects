//aqui importaremos el modelo pero por ahora hare que mande un cubito
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Environment } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import Modelo from './modelo';
import { useState } from 'react';

import { useGLTF } from '@react-three/drei';


// esto recibira props si quiero mandar algo desde el padre
export default function Escena(props) {
  //const model = useLoader(GLTFLoader, '/modelo.glb');
  const { color, position, rotation, scale, fondo, className } = props;
  const [hovered, setHovered] = useState(false)
  const [glowIntensity, setGlowIntensity] = useState(0)

  const gltf = useGLTF('/tt.glb');

  return (
    <div id='modelo' className={className}
      style={{
        flex:'1',
        width:'100%',}}> 
      <Canvas
        id='canvas'
        onPointerOver={()=> setHovered(true)}
        onPointerOut={() => setHovered(false)}

        shadows
        gl={{ alpha: true }}
        style={{ background: fondo? fondo:'transparent'}}
        camera={{
          position: [8, 8, 0],
          rotation: [0, 0, 0],
        }}>
        <OrbitControls 
        
        minDistance={6}
        maxDistance={8}
        minPolarAngle={7*Math.PI/36}
        maxPolarAngle={12*Math.PI/36}
        enablePan={false}

        />
        
        <Environment 
        //ambientacion city, nigth, forest, sunset y otros xd
        preset="city" />
        <ambientLight intensity={0.8} />

      <EffectComposer>
        <Bloom intensity={glowIntensity} luminanceThreshold={0.01} mipmapBlur />
      </EffectComposer>

        <Modelo 
        position={position} 
        rotation={rotation} 
        scale={scale} 
        color={color} 
        glowIntensity={glowIntensity} 
        setGlowIntensity={setGlowIntensity}/>
        <primitive 
          object={gltf.scene} 
          position={position || [0, 0, 0]}
          rotation={rotation || [0, 0, 0]}
          scale={scale || [1, 1, 1]}
        />
      </Canvas>
    </div>
    
  )
}