import express from 'express'
import { addVehicle, deleteVehicleById, getVehicles, updateVehicleByPlate } from '../controllers/vehicleController';

const vehicleRouter = express.Router();

//CRUD para vehiculos
vehicleRouter.get('/', getVehicles)

vehicleRouter.delete('/:id', deleteVehicleById)

vehicleRouter.post('/', addVehicle)

vehicleRouter.patch('/:plate', updateVehicleByPlate)





export default vehicleRouter;
