import React, { JSX } from 'react';
import ItemForm from '@/components/ItemForm';

const RemoveItemPage: React.FC = (): JSX.Element => {
    return (
        <div>
            <h1>Remove Item</h1>
            <ItemForm transactionId={123} />
        </div>
    );
};

export default RemoveItemPage;
