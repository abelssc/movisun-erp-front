import { createContext, ReactNode, useContext, useState } from 'react'

type AuthContext = {
    user: User|null;
    token: string|null;
    login: (user:User,token:string)=>void;
    logout: ()=>void;
}

type User = {
    id: string;
    name: string;
    email: string;
}

const AuthContext = createContext<AuthContext|null>(null);

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [user,setUser]=useState<User|null>(null);
    const [token,setToken]=useState<string|null>(null);

    const login=(user:User,token:string):void=>{
        setUser(user);
        setToken(token);
        localStorage.setItem('token',token);
    }

    const logout=():void=>{
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    }

  return (
    <AuthContext.Provider value={{user,token,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>{
    const context=useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}