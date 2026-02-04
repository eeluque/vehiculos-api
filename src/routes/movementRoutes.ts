import express from 'express'
import { getMovements, addMovement, deleteMovementById, updateMovementById } from '../controllers/movementController';
import { validateBody } from '../middleware/validate';
import { createMovementSchema, updateMovementSchema } from '../models/movementSchema';

const movementRouter = express.Router();

//CRUD para movimientos

movementRouter.get('/', getMovements)

movementRouter.delete('/:id', deleteMovementById)

movementRouter.post('/', validateBody(createMovementSchema), addMovement)

movementRouter.patch('/:id', validateBody(updateMovementSchema), updateMovementById)

export default movementRouter;
