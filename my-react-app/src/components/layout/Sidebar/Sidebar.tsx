import React from "react";
import './Sidebar.css'

const Sidebar: React.FC = () => {
    return (
        <aside id="sidebar" className="sidebar">
            <h2>Pages: </h2>
            <ul>
                <li><a href="/">Acceuil</a></li>
                <li><a href="/profile">Profil</a></li>
                <li><a href="/tasks">Taches</a></li>
            </ul>
        </aside>
    );
};
export default Sidebar;