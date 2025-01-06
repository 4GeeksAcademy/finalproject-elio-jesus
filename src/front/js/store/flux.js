const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token:localStorage.getItem("token") || null, 
            currentUser: localStorage.getItem("currentUser") || null 
        },
        actions: {

            //  guardar contacto
            saveContact: async (contact) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL+"/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contact)
                    });

                    if (response.ok) 
                        return (response.status)
                } catch (error) {
                    return (error)
                }
            },

            //  login
            login: async (credentials) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL+"/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(credentials)
                    });

                    const result = await response.json();
                    if (response.ok) 
                        setStore({ 
                            token:result.token,
                            currentUser: result.user 
                        })
                        localStorage.setItem("token",result.token)
                        localStorage.setItem("currentUser",result.currentUser)
                        return (response.status)
                    
                } catch (error) {
                    return (error)
                }
            },
            
            //cerrar sesion
            close: () => {
                setStore({
                    token:null,
                    currentUser:null
                })
                localStorage.removeItem("token")
                localStorage.removeItem("currentUser")
            }
        }
    };
};

export default getState;
