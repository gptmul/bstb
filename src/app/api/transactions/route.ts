import { NextRequest, NextResponse } from 'next/server';
import { getTransactions } from '@/utils/db';

export const GET = async () => {
    try {
        const transactions = await getTransactions();
        return NextResponse.json(transactions, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to get transactions' }, { status: 500 });
    }
};

export const POST = async () => {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
};

export const PUT = async () => {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
};

export const DELETE = async () => {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
};
