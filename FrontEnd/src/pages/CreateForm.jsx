import React, { useState } from 'react';
import { crearTarea } from '../services/tareasService';
import { useNavigate } from 'react-router-dom';

function CreateForm() {

    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title.trim() || !formData.description.trim()) {
            alert('Por favor completá ambos campos');
            return;
        }

        try {
            await crearTarea(formData);
            alert('Tarea creada correctamente');
            navigate('/'); // Redirige al home u otra página
        } catch (error) {
            console.error('Error al crear la tarea:', error);
            alert('Hubo un error al crear la tarea');
        }
    };

    return (
        <div>
            <h1>Crear Nueva Tarea</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Título de la tarea"
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Descripción de la tarea"
                    />
                </div>
                <button type="submit">Crear</button>
            </form>
        </div>
    )
}

export default CreateForm;