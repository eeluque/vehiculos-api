import express from 'express'
import { getVehicles } from '../controllers/vehicleController';

const vehicleRouter = express.Router();

//ruta principal de vehiculos y obtiene todos los vehiculos en la BD
vehicleRouter.get('/', getVehicles)

export default vehicleRouter;
