//Aqui trataremos el canvas y se ajuste dependiendo del contenedor 
import BloqueTexto from './bloquetexto.jsx';
import Vista from './vista.jsx';

export default function Tarjeta(props) {
    const {titulo,modo,color,fondo,invertido} = props;
    return (
        //con borde primario y tamaño mitad de la pantalla
        <div 
        id='tarjeta'
        className='d-flex justify-content-center px-5' 
        style={{ 
            flexDirection: invertido === "s"? "row" : "row-reverse",
            ...modo}}>
            <Vista titulo={titulo}color={color} fondo={fondo}/>
            <BloqueTexto 
                titulo="Bienvenido a mi proyecto"
                subtitulo="El poder de React + R3F"
                texto="Este sistema te permite aprender y explorar modelos 3D mientras dominas React."
                palabraClave="Innovación"
                items={[
                    "Interacciones 3D",
                    "Animaciones suaves",
                    "Componentes modulares",
                    "Diseño profesional"
                ]}
            />
        </div>
    )
}