"use client";

import React, { useState } from 'react';
import axios from 'axios';

interface ItemFormProps {
    transactionId?: number;
}

const ItemForm: React.FC<ItemFormProps> = ({ transactionId }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/add-item', {
                name,
                description,
                quantity,
                transactionId
            });
            setMessage('Item added successfully');
            console.log('Item added:', response.data);
        } catch (error) {
            setMessage('Failed to add item');
            console.error('Failed to add item:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div>
                <label>Quantity</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
            </div>
            <button type="submit">Submit</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default ItemForm;
