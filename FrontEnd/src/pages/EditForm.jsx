import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { editarTarea, getTareaPorId } from '../services/tareasService';

function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarTarea = async () => {
      try {
        const tarea = await getTareaPorId(id); // o `getTareaPorId(id)` si tuvieras uno más específico
        if (tarea) {
          setFormData({ title: tarea.data.title, description: tarea.data.description });
        } else {
          alert('Tarea no encontrada');
          navigate('/');
        }
      } catch (error) {
        console.error('Error al cargar tarea', error);
      } finally {
        setLoading(false);
      }
    };

    cargarTarea();
  }, [id, navigate]);


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
      await editarTarea(id, formData);
      alert('Tarea actualizada correctamente');
      navigate('/');
    } catch (error) {
      console.error('Error al editar la tarea:', error);
      alert('Error al editar la tarea');
    }
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Editar Tarea</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default EditForm;
