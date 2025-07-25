const express = require("express")
const router = express.Router()
const tareasController = require('../controllers/tareasController.js')

router.get("/", (req, res) => {
    res.status(200).json({
        status: true,
        msg: "Conexión exitosa"
    })
})

router.get('/tareas', tareasController.tareas)

router.get('/tareas/:id', tareasController.tareaPorId)

router.post('/tareas', tareasController.crearTarea)

router.put('/tareas/:id', tareasController.editarTarea)

router.delete('/tareas/:id', tareasController.eliminarTarea)

module.exports = router