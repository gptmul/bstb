"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getSignaturesByTransactionId, Signature } from '@/utils/api';

interface SignatureListProps {
    transactionId: number;
}

interface LocalSignature {
    id: string;
    userId: string;
    signature: string;
}

const SignatureList: React.FC<SignatureListProps> = ({ transactionId }) => {
    const [signatures, setSignatures] = useState<LocalSignature[]>([]);

    useEffect(() => {
        const fetchSignatures = async () => {
            const data = await getSignaturesByTransactionId(transactionId.toString());
            const localSignatures: LocalSignature[] = data.map((signature: Signature) => ({
                id: signature.id,
                userId: signature.userId || '', // Provide a default value or handle accordingly
                signature: signature.signature
            }));
            setSignatures(localSignatures);
        };
        fetchSignatures();
    }, [transactionId]);

    return (
        <div>
            <h2>Signatures</h2>
            <ul>
                {signatures.map((signature) => (
                    <li key={signature.id}>
                        {signature.userId}: <Image src={signature.signature} alt="Signature" width={100} height={50} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SignatureList;
