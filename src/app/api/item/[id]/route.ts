import { NextApiRequest, NextApiResponse } from 'next';
import { getItemById } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { id } = req.query;
        try {
            const item = await getItemById(Number(id));
            res.status(200).json(item);
        } catch {
            res.status(500).json({ error: 'Failed to get item' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
