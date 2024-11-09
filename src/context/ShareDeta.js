import React, { createContext, useContext } from "react";


// Define the context outside the component
const DetaContext = createContext();

// Custom hook for easy access to the context
export const useDeta = () => useContext(DetaContext);

// Define the provider component
export const DetaProvider = ({ children }) => {
    // Initialize `deta1` as state so it can be updated and shared between components
    const deta1 = [];

    return (
        <DetaContext.Provider value={{ deta1  }}>
            {/* Render Add component here or in children, depending on where it's needed */}
           
            {children}
        </DetaContext.Provider>
    );
};

export default DetaProvider;
