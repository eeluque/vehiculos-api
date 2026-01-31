import express from 'express';
import bodyParser from 'body-parser'
import vehicleRoutes from './routes/index';



const app = express();

// Middleware
app.use(bodyParser.json());

// Monta ruta para vehiculos
app.use('/vehicles', vehicleRoutes);

// Handler para errores luego

export default app;
