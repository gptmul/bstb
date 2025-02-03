import { NextApiRequest, NextApiResponse } from 'next';
import { registerUser } from '@/utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password, role } = req.body;
        try {
            await registerUser({ username, password, role });
            res.status(200).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to register user' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
