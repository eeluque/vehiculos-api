import express from 'express';
import bodyParser from 'body-parser'
import vehicleRouter from './routes/vehicleRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());

//Montando router para la pagina principal de vehiculos
app.use('/vehiculos', vehicleRouter);

export default app;
