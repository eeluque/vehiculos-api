import express from 'express'
import { addVehicle, deleteVehicleById, getVehicles, updateVehicleByPlate } from '../controllers/vehicleController';
import { validateBody } from '../middleware/validate';
import { createVehicleSchema, updateVehicleSchema } from '../models/vehicleSchema';

const vehicleRouter = express.Router();

//CRUD para vehiculos
vehicleRouter.get('/', getVehicles)

vehicleRouter.delete('/:id', deleteVehicleById)

vehicleRouter.post('/', validateBody(createVehicleSchema), addVehicle)

vehicleRouter.patch('/:plate', validateBody(updateVehicleSchema), updateVehicleByPlate)





export default vehicleRouter;
