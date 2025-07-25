const BASE_URL = 'http://localhost:4000';

export const getTareas = async () => {
    try {
        const response = await fetch(`${BASE_URL}/tareas`);
        if (!response.ok) {
            throw new Error('Error al obtener las tareas');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getTareaPorId = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/tareas/${id}`);
        if (!response.ok) {
            throw new Error('Error al obtener la tarea');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const crearTarea = async (tarea) => {
    try {
        const response = await fetch(`${BASE_URL}/tareas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tarea),
        });
        if (!response.ok) {
            throw new Error('Error al crear la tarea');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const editarTarea = async (id, tarea) => {
    try {
        const response = await fetch(`${BASE_URL}/tareas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tarea),
        });
        if (!response.ok) {
            throw new Error('Error al editar la tarea');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const eliminarTarea = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/tareas/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error al eliminar la tarea');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const cambiarEstadoTarea = async (id, completed) => {
    try {
        const response = await fetch(`http://localhost:4000/tareas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed }),
        });

        if (!response.ok) {
            throw new Error('Error al cambiar el estado de la tarea');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};