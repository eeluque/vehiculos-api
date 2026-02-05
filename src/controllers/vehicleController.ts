import supabase from "../config/database";
import { Request, Response } from 'express';


export async function getVehicles(req: Request, res: Response) {
    const { data, error } = await supabase
        .from('vehiculos')
        .select()
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({
        mensaje: 'Vehiculos recolectados',
        data: data
    })
}

export async function deleteVehicleById(req: Request, res: Response) {
    const { data, error } = await supabase
        .from('vehiculos')
        .delete()
        .eq('id', req.params.id)

    if (error) return res.status(500).json({ error: error.message });
    res.status(204).json({
        mensaje: 'Vehiculos borrado',
    })
}

export async function addVehicle(req: Request, res: Response) {
    const { placa, modelo, marca, creado, actualizado } = req.body;
    const { error } = await supabase
        .from('vehiculos')
        .insert({ placa: placa, modelo: modelo, marca: marca, creado: creado, actualizado: actualizado })
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({
        mensaje: 'Vehiculo creado'
    })
}


export async function updateVehicleByPlate(req: Request, res: Response) {
    const plateParameter = req.params.plate;
    const { placa, modelo, marca, actualizado } = req.body;
    const vehicleToUpdate = await supabase
        .from('vehiculos')
        .select()
        .eq('placa', plateParameter);

    if (vehicleToUpdate.error) {
        return res.status(500).json({ error: vehicleToUpdate.error.message });
    }
    if (!vehicleToUpdate.data || vehicleToUpdate.data.length === 0) {
        return res.status(404).json({ mensaje: 'Vehiculo no encontrado' });
    }

    const existingVehicle = vehicleToUpdate.data[0];

    const update = {
        placa: placa ?? existingVehicle.placa,
        modelo: modelo ?? existingVehicle.modelo,
        marca: marca ?? existingVehicle.marca,
        actualizado: actualizado ?? new Date().toISOString()
    }

    const { data, error } = await supabase
        .from('vehiculos')
        .upsert(update)
        .eq('placa', plateParameter)

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ mensaje: 'Vehiculo actualizado', data });


}