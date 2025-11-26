//Aqui trataremos el canvas y se ajuste dependiendo del contenedor 
import Modelo from './modelo.jsx'
import Titulo from './titulo.jsx';

export default function vista(props) {
    const {titulo,} = props;
    return (
        //con borde primario y tamaño mitad de la pantalla
        <div id='vista content' 
        className={`h-100 w-100`} 
        style={{
                
        borderStyle:'solid'
      }}>   
            <div className='flex-grow'>
                <Titulo titulo={titulo}/> 
            </div>
            <div className='flex-grow'>
                <Modelo color="orange" fondo="#ffe0bc" className=""/>
            </div> 
        </div>
    )
}