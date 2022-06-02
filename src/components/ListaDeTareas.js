import React, { useState} from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../stylesheets/ListaDeTareas.css';

function ListaDeTareas() {

  const[tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareaActualizadas = [tarea, ...tareas];
      setTareas(tareaActualizadas);
    }
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea 
              texto={tarea.texto}
              completada={tarea.completada}
            />
          )
        }
      </div>
    </>  
  );
}

export default ListaDeTareas;