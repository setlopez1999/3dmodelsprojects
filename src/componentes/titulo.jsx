//Aqui trataremos el canvas y se ajuste dependiendo del contenedor 

export default function Titulo(props) {
    const {titulo} = props;
    return (
        //con borde primario y tamaño mitad de la pantalla
        <div 
        id='titulo content'
        className=""
        style={{
            borderStyle:'solid',
            boxSizing: 'border-box',
        }}>
            {titulo? 
            <h1 className="text-center mb-0"
            style={{
                fontSize:'2rem',
                    overflowWrap: 'break-word', 
                    wordBreak: 'break-word', // Compatibilidad y control estricto de ruptura
                    margin:0
                }}
            >{titulo}</h1>
            :""}
        </div>
    )
}