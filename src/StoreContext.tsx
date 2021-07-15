import React from "react";
import {StoreType} from "./Redux/store";

export const StoreContext = React.createContext({} as StoreType)

export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}
export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}