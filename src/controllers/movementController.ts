import supabase from "../config/database";
import { Request, Response } from 'express';


export async function getMovements(req: Request, res: Response) {
    const { data, error } = await supabase
        .from('movimientos_vehiculo')
        .select()
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({
        mensaje: 'Movimientos recolectados',
        data: data
    })
}

export async function deleteMovementById(req: Request, res: Response) {
    const response = await supabase
        .from('movimientos_vehiculo')
        .delete()
        .eq('id', req.params.id)

    res.status(204).json({
        mensaje: 'Vehiculo eliminado',
    })
}


export async function addMovement(req: Request, res: Response) {
    const { direccion, vehiculo_placa, nombre_conductor, ocurrio, creado, kilometraje } = req.body;
    const { error } = await supabase
        .from('movimientos_vehiculo')
        .insert({ direccion: direccion, vehiculo_placa: vehiculo_placa, nombre_conductor: nombre_conductor, creado: creado, kilometraje: kilometraje, ocurrio: ocurrio })

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({
        mensaje: 'Movimiento creado'
    })
}

export async function updateMovementById(req: Request, res: Response) {
    const id = req.params.id;
    const { direccion, nombre_conductor, vehiculo_placa, modelo, marca, actualizado } = req.body;
    const movementToUpdate = await supabase
        .from('movimientos_vehiculo')
        .select()
        .eq('id', id);

    if (movementToUpdate.error) {
        return res.status(500).json({ error: movementToUpdate.error.message });
    }
    if (!movementToUpdate.data || movementToUpdate.data.length === 0) {
        return res.status(404).json({ mensaje: 'Vehiculo no encontrado' });
    }

    const existingMovement = movementToUpdate.data[0];

    const update = {
        direccion: direccion ?? existingMovement.direccion,
        vehiculo_placa: vehiculo_placa ?? existingMovement.vehiculo_placa,
        nombre_conductor: nombre_conductor ?? existingMovement.nombre_conductor,
        ocurrio: existingMovement.occurio,
        creado: existingMovement.creado,
        actualizado: actualizado ?? new Date().toISOString(),
    }

    const { data, error } = await supabase
        .from('movimientos_vehiculo')
        .update(update)
        .eq('id', id)

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ mensaje: 'Movimiento actualizado', data });


}