import express from 'express';
const vehicleRoutes = express.Router()
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config';
const supabase = createClient('https://wdazdwcnsfnzvekcaqty.supabase.co', process.env.API_KEY!)



// define la ruta principal para vehiculos
vehicleRoutes.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from('vehiculos')
        .select()
    console.log(data)
    res.json(data);



})

export default vehicleRoutes
