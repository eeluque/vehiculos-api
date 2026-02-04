import express from 'express';
import cors from 'cors';
import vehicleRouter from './routes/vehicleRoutes';
import movementRouter from './routes/movementRoutes';

const app = express();

// Middleware
app.use(express.json());
app.use(cors())

//Montando router para la pagina principal de vehiculos
app.use('/vehiculos', vehicleRouter);

//Montando router para la pagina principal de vehiculos
app.use('/movimientos', movementRouter);

export default app;
