import axios from 'axios';

interface Transaction {
    id: string;
    type: string;
    status: string;
    created_at: string;
    // ...other fields...
}

interface Signature {
    id: string;
    userId: string;
    signature: string;
    // ...other fields...
}

export const getTransactions = async (): Promise<Transaction[]> => {
    const response = await axios.get('/api/transactions');
    return response.data;
};

export const getSignaturesByTransactionId = async (transactionId: string): Promise<Signature[]> => {
    const response = await axios.get(`/api/signatures?transactionId=${transactionId}`);
    return response.data;
};

export const addItem = async (itemData: { name: string; description: string; quantity: number; transactionId?: number }) => {
    const response = await axios.post('/api/add-item', itemData);
    return response.data;
};

// ...existing code...
