import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

interface AppProps {
    theme: string;
    toggleTheme: () => void;
    toggleSidebar: () => void;
}


const Header: React.FC<AppProps> = ({theme, toggleTheme, toggleSidebar}) => {
    return (
        <header id="head">
            <button id="open-sidebar" className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
            <h1>TaskMe</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius nisi perspiciatis magnam perferendis quo ab distinctio.</p>
            <nav aria-label="Navigation principale">
                <ul>
                    <li><NavLink to="/" end>Acceuil</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/tasks">Tasks</NavLink></li>
                </ul>
            </nav>
            <button className="theme-btn" id="theme-toggle" onClick={toggleTheme}>{theme === "light" ? "Mode sombre" : "Mode light"}</button>
        </header>
    );
};
export default Header;