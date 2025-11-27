import Titulo from "./titulo"
import Escena from "./escena"
export default function Vista(props){
    const {titulo,color,fondo} = props
    return(
        <div id='vista' 
        className={'h-100 w-50 d-flex flex-column'}
        >
            <div>
                <Titulo 
                    titulo={titulo}
                /> 
            </div>
            <div 
            className='flex-grow-1 d-flex' 
            style={{
                minHeight: 0,
            }}>
                <Escena 
                color={color}
                fondo={fondo}/>
            </div> 
        </div>
    )
}