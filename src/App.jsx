import 'bootstrap/dist/css/bootstrap.min.css';
import Tarjeta from './componentes/tarjeta.jsx';
import CambioThema from './componentes/cambiothema.jsx';


function App() {
  return (
    <div>
      <CambioThema/>
      <div 
        id='app'
        /*NOTA.
          para poder dezplazar pro abajo 
          quitamos el fixed y cambiamos la altura a vh
          height:'100vh',
          width:'100%',


          usa → para que esten estaticos y se reajuste a la pantalla
          height:'100%',  → cambia a 50% para mitad de pantalla horizontal
          width:'100%',
          position:'fixed'
        */ 
        >
            <Tarjeta 
            titulo="Proyecto" 
            color="red" 
            fondo=''
            invertido = 'n'
            modo={{
              height:'100vh',
              width:'100%',
              //justifySelf: "end",
            }}
            />
            <Tarjeta 
            titulo="Proyecto" 
            color="green" 
            fondo=''
            invertido= 's'
            modo={{
              height:'100vh',
              width:'100%',
            }}
            />


      </div>
    </div>
    
  )
}

export default App
