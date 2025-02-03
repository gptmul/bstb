import React from 'react';
import ItemForm from '@/components/ItemForm';

interface EditTransactionPageProps {
    params: {
        id: string;
    };
}

const EditTransactionPage = ({ params }: EditTransactionPageProps) => {
    const { id } = params;

    return (
        <div>
            <h1>Edit Transaction</h1>
            <ItemForm transactionId={parseInt(id)} />
        </div>
    );
};

export default EditTransactionPage;
