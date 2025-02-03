import React, { useState } from 'react';

const TandaTangan = ({ role }: { role: string }) => {
    const [tandaTangan, setTandaTangan] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle tanda tangan submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={tandaTangan}
                onChange={(e) => setTandaTangan(e.target.value)}
                placeholder={`Tanda Tangan ${role}`}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TandaTangan;
