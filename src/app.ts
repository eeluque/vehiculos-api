import express from 'express';
import cors from 'cors';
import vehicleRouter from './routes/vehicleRoutes';
import movementRouter from './routes/movementRoutes';

const app = express();

// CORS debe ir primero para que las peticiones preflight (OPTIONS) reciban los headers correctos
const allowedOrigins = [
    'https://vehiculos-70r7i6g2j-eduardo-luques-projects.vercel.app',
    'https://vehiculos-app.vercel.app',
    'http://localhost:3000',
];
// Permitir también cualquier subdominio de vercel.app (preview deployments)
const isAllowedOrigin = (origin: string | undefined) => {
    if (!origin) return true; // Permitir requests sin Origin (Postman, curl, etc.)
    if (allowedOrigins.includes(origin)) return true;
    if (origin.endsWith('.vercel.app')) return true;
    if (origin.includes('localhost')) return true;
    return false;
};
app.use(cors({
    origin: (origin, callback) => {
        callback(null, isAllowedOrigin(origin));
    },
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

//Montando router para la pagina principal de vehiculos
app.use('/vehiculos', vehicleRouter);

//Montando router para la pagina principal de vehiculos
app.use('/movimientos', movementRouter);

export default app;
