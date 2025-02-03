import React, { useState } from 'react';

const FormBarangKeluar = () => {
    const [namaBarang, setNamaBarang] = useState('');
    const [jumlah, setJumlah] = useState(0);
    const [tandaTanganPembuat, setTandaTanganPembuat] = useState('');

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
            <input
                type="text"
                value={tandaTanganPembuat}
                onChange={(e) => setTandaTanganPembuat(e.target.value)}
                placeholder="Tanda Tangan Pembuat"
            />
            <button type="submit">Keluarkan Barang</button>
        </form>
    );
};

export default FormBarangKeluar;
