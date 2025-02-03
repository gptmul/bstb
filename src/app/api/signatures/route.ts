import { NextRequest, NextResponse } from 'next/server';
import { getSignaturesByTransactionId } from '@/utils/db';

export const GET = async (req: NextRequest) => {
    const transactionId = req.nextUrl.searchParams.get('transactionId');
    if (!transactionId) {
        return NextResponse.json({ error: 'Transaction ID is required' }, { status: 400 });
    }

    try {
        const signatures = await getSignaturesByTransactionId(parseInt(transactionId));
        return NextResponse.json(signatures, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to get signatures' }, { status: 500 });
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
