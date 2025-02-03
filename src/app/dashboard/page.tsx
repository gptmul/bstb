import React, { JSX } from 'react';
import TransactionTable from '@/components/TransactionTable';

const DashboardPage: React.FC = (): JSX.Element => {
    return (
        <div>
            <h1>Dashboard</h1>
            <TransactionTable />
        </div>
    );
};

export default DashboardPage;
