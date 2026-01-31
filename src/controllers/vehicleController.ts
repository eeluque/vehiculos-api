import supabase from "../config/database";
import { Request, Response } from 'express'; // Ensure you import Request and Response


export async function getVehicles(req: Request, res: Response) {
    const { data, error } = await supabase
        .from('vehiculos')
        .select()
    res.json(data)
}