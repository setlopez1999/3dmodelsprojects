import 'bootstrap/dist/css/bootstrap.min.css';
import Vista from './componentes/vista.jsx'
import Modelo from './componentes/modelo.jsx';

function App() {
  return (
    <div>
      <div 
        id='app content'
        className='flex w-full h-full border border-primary'
        style={{
          height:'100vh',
          width:'100vw'
        }}>
          <Vista 
            titulo="Set"/>
      </div>

    </div>
    
  )
}

export default App
