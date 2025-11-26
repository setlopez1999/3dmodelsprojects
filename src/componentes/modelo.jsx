//aqui importaremos el modelo pero por ahora hare que mande un cubito
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// esto recibira props si quiero mandar algo desde el padre
export default function Modelo(props) {
  //const model = useLoader(GLTFLoader, '/modelo.glb');
  const { color, position, rotation, scale, fondo, className } = props;
  return (
    <div id='modelo content' className={className}
      style={{
        borderStyle:'dashed',
        borderColor:'#c43939ff', 
        boxSizing:'border-box',
        width:'100%',
        height:'100%'}}> 
      <Canvas
        id='canvas content'
        shadows
        style={{
        borderStyle:'dashed',
        borderColor:'#c43939ff', 

        width:'100%',
        height:'100%'}}
        camera={{
          position: [0, 10, 0],
          rotation: [0, 0, 0],
        }}>
        <color attach="background" args={[fondo ||'#ffffffff' ]}/>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.8} />
        <mesh
          castShadow
          receiveShadow
          position={[0,0,0]  || {position}} 
          rotation={[0,0,0]  || {rotation}} 
          scale=   {[1,1,1]  || {scale}}>
          
          <sphereGeometry args={[2, 8, 8]} />
          <meshStandardMaterial color={color}/>
        </mesh>
        {/* <primitive object={new THREE.BoxGeometry(1, 1, 1)} /> */}
      </Canvas>
    </div>
    
  )
}