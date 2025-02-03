import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { pool } from './db';

interface User {
    id: number;
    username: string;
    password: string;
    role: string;
    // Add other fields as necessary
}

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export const generateToken = (user: User): string => {
    return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string): { id: number; role: string } => {
    return jwt.verify(token, JWT_SECRET) as { id: number; role: string };
};

export const verifyUser = async (username: string, password: string): Promise<User | null> => {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM users WHERE username = ?', [username]);
    conn.release();
    if (rows.length > 0) {
        const user = rows[0] as User;
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return user;
        }
    }
    return null;
};

interface RegisterUserParams {
    username: string;
    password: string;
    role: string;
}

export const registerUser = async ({ username, password, role }: RegisterUserParams): Promise<void> => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const conn = await pool.getConnection();
    await conn.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, hashedPassword, role]);
    conn.release();
};