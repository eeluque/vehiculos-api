import express from 'express'
import { getMovements, addMovement, deleteMovementById, updateMovementById } from '../controllers/movementController';

const movementRouter = express.Router();

movementRouter.get('/', getMovements)

movementRouter.delete('/:id', deleteMovementById)

movementRouter.post('/', addMovement)

movementRouter.patch('/:id', updateMovementById)

export default movementRouter;
