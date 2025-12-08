import React, { useEffect, useState } from "react";
import './index.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import TaskPage from "./components/pages/TaskPage";
import Footer from "./components/layout/Footer/Footer";

const App: React.FC = () => {
    const [theme, setTheme] = useState("light");
    const [open, setOpen] = useState(true);

    const toggleSidebar = () => {
        if(open){
            document.getElementById("sidebar")?.classList.remove("open");
            setOpen(!open);
        }else{
            document.getElementById("sidebar")?.classList.add("open");
            setOpen(!open);
        }
    }


    const closeSidebar = () => {
        setOpen(false);
        document.getElementById("sidebar")?.classList.remove("open");
    }

    useEffect(() => {
        toggleSidebar();
    }, []);

    const toggleTheme = () => {
        if(theme === "dark") {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "dark");
            setTheme("light");
        } else {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "light");
            setTheme("dark");
        }
    }

    return (
        <BrowserRouter>
        <Header theme={theme} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} />
        <Sidebar/>
        <Routes>
            <Route path="/" element={<HomePage closeSidebar={closeSidebar} />}/>
            <Route path="/profile" element={<ProfilePage closeSidebar={closeSidebar} />}/>
            <Route path="/tasks" element={<TaskPage closeSidebar={closeSidebar} />}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    );
};
export default App;