import { NextApiRequest, NextApiResponse } from 'next';
import { editTransaction } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { transactionId, items } = req.body;
        try {
            await editTransaction({ transactionId, items });
            res.status(200).json({ message: 'Transaction edited successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to edit transaction' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}