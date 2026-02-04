import { z } from 'zod';

export const createMovementSchema = z.object({
    direccion: z.string().min(1, 'La dirección es requerida'),
    vehiculo_placa: z.string().min(1, 'La placa del vehículo es requerida'),
    nombre_conductor: z.string().min(1, 'El nombre del conductor es requerido'),
    ocurrio: z.string().datetime(),
    creado: z.string().datetime().optional(),
    kilometraje: z.number().nonnegative(),
});

export const updateMovementSchema = z.object({
    direccion: z.string().min(1).optional(),
    vehiculo_placa: z.string().min(1).optional(),
    nombre_conductor: z.string().min(1).optional(),
    modelo: z.string().optional(),
    marca: z.string().optional(),
    actualizado: z.string().datetime().optional(),
});

export type CreateMovementInput = z.infer<typeof createMovementSchema>;
export type UpdateMovementInput = z.infer<typeof updateMovementSchema>;
