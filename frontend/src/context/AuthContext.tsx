import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { loginUser } from "../helpers/api-communicator";

type User = {
    name: string;
    email: string;
}
type UserAuth={
    isLoggedIn: boolean;
    user: User|null;
    login:(email:string, password:string)=>Promise<void>;
    signup: (name:string, email:string, password:string)=>Promise<void>;
    logout:()=>Promise<void>
}

const AuthContext = createContext<UserAuth | null>(null);
const AuthProvider = ({ children }: { children: ReactNode }) =>{
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        //Fetch if the user cookies are valid then skip login
    },[]);

    const login = async(email:string, password:string)=>{
        const data = await loginUser(email, password);
        //If data is valid then user is created
        if(data){
            setUser({email: data.email, name:data.name});
            setIsLoggedIn(true);
        }
    };
    const signup = async(name:string, email:string, password:string)=>{};
    const logout = async ()=>{};
    const value ={
        user,
        isLoggedIn,
        login,
        logout,
        signup,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    
};
const useAuth = ()=> useContext(AuthContext);
export {AuthContext, AuthProvider, useAuth}