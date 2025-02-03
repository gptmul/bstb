import { NextApiRequest, NextApiResponse } from 'next';
import { getTransactionDetails } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { transactionId } = req.query;
        try {
            const details = await getTransactionDetails(Number(transactionId));
            res.status(200).json(details);
        } catch {
            res.status(500).json({ error: 'Failed to get transaction details' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
