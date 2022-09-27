import React, { useEffect, useState } from "react";
import { } from '../providers/Providers';


export const MainChain = React.createContext();
export const MainChainProvider = ({children}) => {

    useEffect(async () => {

    }, []);
    
return (
    <MainChain.Provider
    value={{}}>
       {children} 
    </MainChain.Provider>
)
}