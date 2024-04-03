"use client"

import { createContext, useContext, useEffect, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [data, setData] = useState(null);


    // GET Projects Data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/projects");
                const projectsData = await response.json();
                setData(projectsData);
            } catch (error) {
                console.error("Error fetching project data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts


    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext);
