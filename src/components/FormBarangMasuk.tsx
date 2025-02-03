import React, { useState } from 'react';

const FormBarangMasuk = () => {
    const [namaBarang, setNamaBarang] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [stok, setStok] = useState(0);

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
            <textarea
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                placeholder="Deskripsi"
            />
            <input
                type="number"
                value={stok}
                onChange={(e) => setStok(Number(e.target.value))}
                placeholder="Stok"
            />
            <button type="submit">Tambah Barang</button>
        </form>
    );
};

export default FormBarangMasuk;
