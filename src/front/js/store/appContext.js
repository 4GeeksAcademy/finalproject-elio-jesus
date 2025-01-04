import React, { createContext, useReducer } from "react";

const initialState = {
    contacts: []
};

const Context = createContext(initialState);

const reducer = (state, action) => {
    switch(action.type) {
        case "SAVE_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        default:
            return state;
    }
};

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const saveContact = async (contact) => {
        try {
            // Simular la llamada a una API para guardar el contacto
            
            dispatch({
                type: "SAVE_CONTACT",
                payload: contact
            });
            return true;
        } catch (error) {
            console.error("Error guardando el contacto", error);
            return false;
        }
    };

    return (
        <Context.Provider value={{
            store: state,
            actions: {
                saveContact
            }
        }}>
            {children}
        </Context.Provider>
    );
};

export { Context, AppContextProvider };
