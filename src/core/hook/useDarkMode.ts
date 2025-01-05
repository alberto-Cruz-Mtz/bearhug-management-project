import {useEffect, useState} from "react";

export default function useDarkMode() {

    const getInitialDarkMode = () => {
        const themeStorage = window.localStorage.getItem('theme');
        return themeStorage === 'dark';
    }

    const [darkMode, setDarkMode] = useState<boolean>(getInitialDarkMode());

    const toggleDarkMode = () => setDarkMode(prevState => !prevState);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        window.localStorage.setItem('theme', darkMode ? 'dark' : 'light' );
    }, [darkMode]);

    return {darkMode, toggleDarkMode};
}