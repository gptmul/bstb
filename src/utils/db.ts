import { createPool } from 'mariadb';

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export { pool };

interface AddItemParams {
    name: string;
    description: string;
    quantity: number;
}

export const addItem = async ({ name, description, quantity }: AddItemParams): Promise<void> => {
    const conn = await pool.getConnection();
    await conn.query('INSERT INTO items (name, description, quantity) VALUES (?, ?, ?)', [name, description, quantity]);
    conn.release();
};

// ...existing code...

interface Transaction {
    id: number;
    type: string;
    status: string;
    created_at: string;
    // Add other fields as necessary
}

export const getTransactions = async (): Promise<Transaction[]> => {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM transactions');
    conn.release();
    return rows as Transaction[];
};

export const getTransactionById = async (id: number): Promise<Transaction | undefined> => {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM transactions WHERE id = ?', [id]);
    conn.release();
    return rows[0] as Transaction | undefined;
};

// ...existing code...