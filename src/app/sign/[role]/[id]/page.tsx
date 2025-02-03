import React from 'react';
import SignaturePad from '@/components/SignaturePad';

interface SignPageProps {
    params: {
        role: string;
        id: string;
    };
}

const SignPage: React.FC<SignPageProps> = ({ params }) => {
    const { role, id } = params;

    return (
        <div>
            <h1>Sign Transaction</h1>
            <SignaturePad role={role} transactionId={id} />
        </div>
    );
};

export default SignPage;
