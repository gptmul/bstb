import React, { useState } from 'react';

const EditBeritaAcara = () => {
    const [namaBarang, setNamaBarang] = useState('');
    const [jumlah, setJumlah] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={namaBarang}
                onChange={(e) => setNamaBarang(e.target.value)}
                placeholder="Nama Barang"
            />
            <input
                type="number"
                value={jumlah}
                onChange={(e) => setJumlah(Number(e.target.value))}
                placeholder="Jumlah"
            />
            <button type="submit">Edit Berita Acara</button>
        </form>
    );
};

export default EditBeritaAcara;
