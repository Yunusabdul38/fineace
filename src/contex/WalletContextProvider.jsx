import { createContext, useReducer } from "react";

const initialData = {
    wallet:true,
    dispatch:()=>{},    
}
export const CreatContext = createContext(initialData);

const reducer = (action,state)=>{
    if(action.type === "active-wallet"){
        return {...state,wallet:true}
    }
    return initialData
}
 function WalletProvider({ children }) {
    const [state,dispatch] = useReducer(reducer,initialData)
    
  return <CreatContext.Provider value={{wallet:state.wallet,dispatch:dispatch}}>{children}</CreatContext.Provider>;
}

export default WalletProvider