import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

interface SignaturePadProps {
    role: string;
    transactionId: string;
}

const SignaturePad: React.FC<SignaturePadProps> = () => {
    const sigCanvas = useRef<SignatureCanvas>(null);

    const handleSave = async () => {
        if (sigCanvas.current) {
            const signature = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
            console.log(signature); // Use the signature variable, e.g., log it or send it to a server
            // ...existing code to save the signature...
        }
    };

    return (
        <div>
            <SignatureCanvas ref={sigCanvas} canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
            <button onClick={handleSave}>Save Signature</button>
        </div>
    );
};

export default SignaturePad;
