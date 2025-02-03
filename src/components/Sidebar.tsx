import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside>
            <ul>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/add-item">Add Item</Link></li>
                <li><Link href="/remove-item">Remove Item</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
