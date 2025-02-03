import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {/* Custom fonts moved to _document.tsx */}
                <meta name="description" content="Aplikasi pendataan barang" />
                {/* Tambahkan meta tag atau sumber daya eksternal di sini */}
            </head>
            <body>
                <Navbar />
                <div style={{ display: 'flex' }}>
                    <Sidebar />
                    <main style={{ flex: 1 }}>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
