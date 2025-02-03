import { NextApiRequest, NextApiResponse } from 'next';
import { saveSignature } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { transactionId, userId, signature } = req.body;
        try {
            await saveSignature({ transactionId, userId, signature });
            res.status(200).json({ message: 'Signature saved successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to save signature' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
