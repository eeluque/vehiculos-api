import express, { Request, Response, NextFunction } from 'express';
import vehicleRouter from './routes/vehicleRoutes';
import movementRouter from './routes/movementRoutes';

const app = express();

// CORS manual: headers en todas las respuestas + manejo explícito de preflight (OPTIONS)
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
});

app.use(express.json());

//Montando router para la pagina principal de vehiculos
app.use('/vehiculos', vehicleRouter);

//Montando router para la pagina principal de vehiculos
app.use('/movimientos', movementRouter);

export default app;
