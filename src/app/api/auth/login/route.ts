import { NextApiRequest, NextApiResponse } from 'next';
import { verifyUser } from '@/utils/auth';
import { generateToken } from '@/utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        try {
            const user = await verifyUser(username, password);
            if (user) {
                const token = generateToken(user);
                res.status(200).json({ token });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to login' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
