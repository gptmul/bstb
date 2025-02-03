import React from 'react';
import TransactionTable from '@/components/TransactionTable';
import SignatureList from '@/components/SignatureList';

interface Params {
    id: string;
}

const InvoicePage = ({ params }: { params: Params }) => {
    const { id } = params;

    return (
        <div>
            <h1>Invoice</h1>
            <TransactionTable transactionId={parseInt(id)} />
            <SignatureList transactionId={parseInt(id)} />
        </div>
    );
};

export default InvoicePage;
