import express from 'express';
import bodyParser from 'body-parser'
import vehicleRouter from './routes/vehicleRoutes';
import movementRouter from './routes/movementRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());

//Montando router para la pagina principal de vehiculos
app.use('/vehiculos', vehicleRouter);

//Montando router para la pagina principal de vehiculos
app.use('/movimientos', movementRouter);

export default app;
