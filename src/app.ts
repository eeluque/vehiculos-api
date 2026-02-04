import express from 'express';
import cors from 'cors';
import vehicleRouter from './routes/vehicleRoutes';
import movementRouter from './routes/movementRoutes';

const app = express();

// CORS debe ir primero para que las peticiones preflight (OPTIONS) reciban los headers correctos
app.use(cors({
    origin: [
        /\.vercel\.app$/,           // Preview y producción en Vercel
        /\.railway\.app$/,          // Por si accedes desde Railway
        'http://localhost:3000',    // Desarrollo local
    ],
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

//Montando router para la pagina principal de vehiculos
app.use('/vehiculos', vehicleRouter);

//Montando router para la pagina principal de vehiculos
app.use('/movimientos', movementRouter);

export default app;
