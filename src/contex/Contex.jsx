import { createContext, useEffect, useState } from "react"


export const Rigister = createContext();

 export const SignProvider = ({children}) => {

const [token, setToken] = useState(localStorage.getItem("token"));

useEffect(() =>{
    if (token) {
        localStorage.setItem("token", token)
}
}, [token])
    return (
        <Rigister.Provider value={[token, setToken]}>
            {children}
        </Rigister.Provider>
    )
};



