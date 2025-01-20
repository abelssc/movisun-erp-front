import { createContext, ReactNode, useContext, useState } from 'react'

type AuthContext = {
    user: User|null;
    token: string|null;
    login: (user:User,token:string)=>void;
    logout: ()=>void;
    checkSession: ()=>boolean;
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

    const checkSession=():boolean=>{
        if(user) return true;
        
        const token=localStorage.getItem('token');
        if(!token) return false;
        
        // fetch user details from server
        const user_:User={
            id:'1',
            name:'John Doe',
            email:'admin@gmail.com'
        }
        login(user_,token);
        return true;
    }

  return (
    <AuthContext.Provider value={{user,token,login,logout,checkSession}}>
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