"use client";

import React, { useEffect, useState } from 'react';
import { getTransactions } from '@/utils/api';

interface TransactionTableProps {
    transactionId?: number;
}

interface Transaction {
    id: string;
    type: string;
    status: string;
    created_at: string;
    // ...other fields...
}

const TransactionTable: React.FC<TransactionTableProps> = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const data: Transaction[] = await getTransactions();
            setTransactions(data);
        };
        fetchTransactions();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Created At</th>
                    {/* ...existing code... */}
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.type}</td>
                        <td>{transaction.status}</td>
                        <td>{transaction.created_at}</td>
                        {/* ...existing code... */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;
