import React, { useEffect, useState } from 'react';
import { eliminarTarea, getTareas, cambiarEstadoTarea } from '../services/tareasService';
import { Link } from 'react-router-dom';

function Home() {

    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        cargarTareas();
    }, []);

    const cargarTareas = async () => {
        try {
            const tareasObtenidas = await getTareas();
            setTareas(tareasObtenidas.data);
        } catch (error) {
            console.error('Error al cargar las tareas:', error);
        }
    }

    const handleEliminarTarea = async (id) => {
        try {
            await eliminarTarea(id);
            cargarTareas();
        } catch (error) {
            console.error('Error al eliminar la tarea');
        }
    }

    const handleCheckboxChange = async (id, currentCompleted) => {
        try {
            await cambiarEstadoTarea(id, !currentCompleted);
            cargarTareas(); // Recarga la lista después del cambio
        } catch (error) {
            console.error('Error al cambiar el estado de la tarea:', error);
        }
    }

    return (
        <>
            <h1>Mis Tareas</h1>

            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id} className="tarea-item">
                        <input
                            type="checkbox"
                            className="tarea-checkbox"
                            checked={tarea.completed}
                            onChange={() => handleCheckboxChange(tarea.id, tarea.completed)}
                        />
                        <div className="tarea-texto">
                            {tarea.title} - {tarea.description}
                        </div>
                        <div className="tarea-acciones">
                            <Link className='linkButton' to={'/editForm/' + tarea.id}>Editar</Link>
                            <button onClick={() => handleEliminarTarea(tarea.id)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home;