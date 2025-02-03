import { NextApiRequest, NextApiResponse } from 'next';
import { removeItem } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { itemId } = req.body;
        try {
            await removeItem(itemId);
            res.status(200).json({ message: 'Item removed successfully' });
        } catch {
            res.status(500).json({ error: 'Failed to remove item' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
