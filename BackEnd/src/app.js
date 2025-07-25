const express = require('express');
const cors = require('cors');
const createError = require('http-errors')


const PORT = process.env.PORT || 4000;
const app = express();


/* Middlewares */
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Rutas
const indexRouter = require('./routes/indexRouter.js');

app.use('/', indexRouter)

// Ruta no encontrada
app.use((req, res, next) => {
    next(createError(404, 'Ruta no encontrada'))
})

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}\nhttp://localhost:${PORT}`));