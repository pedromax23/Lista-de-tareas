
const tareas = [
    { id: 1, title: "Tarea 1", description: 'Tarea numero uno', completed: true },
    { id: 2, title: "Tarea 2", description: 'Tarea numero dos', completed: false },
    { id: 3, title: "Tarea 3", description: 'Tarea numero tres', completed: false }
]


module.exports = {
    tareas: async (req, res) => {
        res.status(200).json({
            status: true,
            msg: "Tareas endpoint",
            data: tareas
        })
    },

    tareaPorId: async (req, res) => {
        const tarea = tareas.find(t => t.id === parseInt(req.params.id));
        if (!tarea) {
            return res.status(404).json({
                status: false,
                msg: `Tarea con ID ${req.params.id} no encontrada`
            });
        }
        res.status(200).json({
            status: true,
            msg: `Tarea con ID ${req.params.id} encontrada`,
            data: tarea
        })
    },

    crearTarea: async (req, res) => {
        const { title, description } = req.body;

        const nuevaTarea = {
            id: tareas[tareas.length - 1].id + 1,
            title,
            description,
            completed: false
        };

        tareas.push(nuevaTarea);

        res.status(201).json({
            status: true,
            msg: "Tarea creada exitosamente",
            data: nuevaTarea
        })
    },

    editarTarea: async (req, res) => {

        const { title, description, completed } = req.body;

        const tareaIndex = tareas.findIndex(t => t.id === parseInt(req.params.id));

        const editarTarea = {
            id: parseInt(req.params.id),
            title: title || tareas[tareaIndex].title,
            description: description || tareas[tareaIndex].description,
            completed: completed !== undefined ? completed : tareas[tareaIndex].completed
        };

        tareas[tareaIndex] = editarTarea;

        res.status(200).json({
            status: true,
            msg: `Tarea con ID ${req.params.id} editada exitosamente`,
            data: editarTarea
        })
    },

    eliminarTarea: async (req, res) => {

        const tareaIndex = tareas.findIndex(t => t.id === parseInt(req.params.id));

        const tareaEliminada = tareas.splice(tareaIndex, 1);

        res.status(200).json({
            status: true,
            msg: `Tarea con ID ${req.params.id} eliminada exitosamente`
        })
    }
}