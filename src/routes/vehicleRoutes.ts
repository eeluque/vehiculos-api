import express from 'express'
import { addVehicle, deleteVehicleById, getVehicles, updateVehicleByPlate } from '../controllers/vehicleController';

const vehicleRouter = express.Router();

//ruta principal de vehiculos y obtiene todos los vehiculos en la BD
vehicleRouter.get('/', getVehicles)

vehicleRouter.delete('/:id', deleteVehicleById)

vehicleRouter.post('/', addVehicle)

vehicleRouter.patch('/:plate', updateVehicleByPlate)

export default vehicleRouter;
