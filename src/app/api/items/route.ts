import { NextApiRequest, NextApiResponse } from 'next';
import { getItems } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const items = await getItems();
            res.status(200).json(items);
        } catch {
            res.status(500).json({ error: 'Failed to get items' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
