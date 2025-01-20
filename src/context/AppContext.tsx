import { createContext, useContext, useState } from "react";

type AppContextType = {
    header: string|null;
    setHeader: (header:string|null)=>void;
}

const AppContext=createContext<AppContextType|null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [header, setHeader] = useState<string|null>(null);



    return (
        <AppContext.Provider value={{
            header,
            setHeader
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useApp=()=>{
    const context=useContext(AppContext);
    if(!context){
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
}