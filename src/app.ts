import express, { Request, Response, NextFunction } from 'express';
import vehicleRouter from './routes/vehicleRoutes';
import movementRouter from './routes/movementRoutes';
import cors from 'cors';

const app = express();


app.use(cors({
    origin: [
        "https://vehiculos-70r7i6g2j-eduardo-luques-projects.vercel.app",
        "http://localhost:3000"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"]
}));

app.use(express.json());

//Montando router para la pagina principal de vehiculos
app.use('/vehiculos', vehicleRouter);

//Montando router para la pagina principal de vehiculos
app.use('/movimientos', movementRouter);

export default app;
