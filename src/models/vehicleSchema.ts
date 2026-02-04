import { z } from 'zod';

export const createVehicleSchema = z.object({
    placa: z.string().min(1, 'La placa es requerida'),
    modelo: z.string().min(1, 'El modelo es requerido'),
    marca: z.string().min(1, 'La marca es requerida'),
    creado: z.string().datetime().optional(),
    actualizado: z.string().datetime().optional(),
});

export const updateVehicleSchema = createVehicleSchema.partial().omit({ creado: true });

export type CreateVehicleInput = z.infer<typeof createVehicleSchema>;
export type UpdateVehicleInput = z.infer<typeof updateVehicleSchema>;
