import express, { Request, Response, NextFunction } from 'express';
import vehicleRouter from './routes/vehicleRoutes';
import movementRouter from './routes/movementRoutes';
import cors from 'cors';

const app = express();


app.use(cors({
    origin: function (origin, callback) {
        // permitir clientes que no sean de navegador
        if (!origin) return callback(null, true);

        // Permitir cualquier deployment the vercel
        if (
            origin.endsWith(".vercel.app") ||
            origin === "http://localhost:3000"
        ) {
            return callback(null, true);
        }

        console.log("CORS BLOCKED ORIGIN:", origin);
        callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"]
}));

app.use(express.json());

app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (origin && origin.endsWith(".vercel.app")) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }

    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    next();
});

//Montando router para la pagina principal de vehiculos
app.use('/vehiculos', vehicleRouter);

//Montando router para la pagina principal de vehiculos
app.use('/movimientos', movementRouter);

export default app;
