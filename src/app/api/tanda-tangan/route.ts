import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/utils/db';

export const POST = async (req: NextRequest) => {
    const { transaksiId, userId, role, signature } = await req.json();
    const conn = await pool.getConnection();
    try {
        // Insert tanda tangan into database
        await conn.query('INSERT INTO tanda_tangan (transaksi_id, user_id, role, signature) VALUES (?, ?, ?, ?)', [transaksiId, userId, role, signature]);
        return NextResponse.json({ message: 'Tanda tangan added' }, { status: 201 });
    } finally {
        conn.release();
    }
};

export const GET = async () => {
    const conn = await pool.getConnection();
    try {
        // Get all tanda tangan from database
        const [rows] = await conn.query('SELECT * FROM tanda_tangan');
        return NextResponse.json(rows, { status: 200 });
    } finally {
        conn.release();
    }
};

export const PUT = async () => {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
};

export const DELETE = async () => {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
};
