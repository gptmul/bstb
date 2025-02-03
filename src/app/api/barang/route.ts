import { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { namaBarang, deskripsi, stok } = req.body;
        // Insert barang into database
        await pool.query('INSERT INTO barang (nama_barang, deskripsi, stok) VALUES (?, ?, ?)', [namaBarang, deskripsi, stok]);
        res.status(201).json({ message: 'Barang added' });
    } else if (req.method === 'GET') {
        // Get all barang from database
        const [rows] = await pool.query('SELECT * FROM barang');
        res.status(200).json(rows);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
