import { NextRequest, NextResponse } from 'next/server';
import { getTransactionById } from '@/utils/db';

export const GET = async (req: NextRequest) => {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) {
        return NextResponse.json({ error: 'Transaction ID is required' }, { status: 400 });
    }

    try {
        const transaction = await getTransactionById(parseInt(id));
        if (!transaction) {
            return NextResponse.json({ error: 'Transaction not found' }, { status: 404 });
        }
        return NextResponse.json(transaction, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to get transaction' }, { status: 500 });
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
