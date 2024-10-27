"use client"

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

// Define a TypeScript interface for company data
interface Company {
    id: number; // Changed to number type
    name: string;
    experience: number;
    expertise: string[];
    commitment: string[];
}

interface SelectedCompanyContextType {
    selectedCompany: Company | null; // To store the selected company details
    selectedCompanyId: number | null; // Changed to number type
    setSelectedCompany: (company: Company | null) => void; // Function to set the selected company
    setSelectedCompanyId: (id: number | null) => void; // Changed to number type
}

// Create the context with default values
const SelectedCompanyContext = createContext<SelectedCompanyContextType | undefined>(undefined);

export const SelectedCompanyProvider = ({ children }: { children: ReactNode }) => {
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
    const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null); // Changed to number type

    // Memoize the context value
    const value = useMemo(() => ({
        selectedCompany,
        selectedCompanyId,
        setSelectedCompany,
        setSelectedCompanyId,
    }), [selectedCompany, selectedCompanyId]);

    return (
        <SelectedCompanyContext.Provider value={value}>
            {children}
        </SelectedCompanyContext.Provider>
    );
};

export const useSelectedCompany = () => {
    const context = useContext(SelectedCompanyContext);
    if (context === undefined) {
        throw new Error('useSelectedCompany must be used within a SelectedCompanyProvider');
    }
    return context;
};