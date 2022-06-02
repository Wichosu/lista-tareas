import logo from './imgs/logo.svg';
import './App.css';
import Tarea from './components/Tarea';
import TareaFormulario from './components/TareaFormulario';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img 
          src={logo}
          className='logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
