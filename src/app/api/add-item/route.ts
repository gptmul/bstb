import { NextRequest, NextResponse } from 'next/server';
import { addItem } from '@/utils/db';

export const POST = async (req: NextRequest) => {
    const { name, description, quantity, transactionId } = await req.json();
    try {
        await addItem({ name, description, quantity });
        return NextResponse.json({ message: 'Item added successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to add item' }, { status: 500 });
    }
};

export const GET = async () => {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
};
