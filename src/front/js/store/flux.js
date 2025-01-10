const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token:JSON.parse(localStorage.getItem("token")) || null, 
            currentUser:JSON.parse(localStorage.getItem("currentUser")) || null 
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
                            currentUser:result.currentUser 
                        })
                        localStorage.setItem("token",JSON.stringify(result.token))
                        localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
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
            },

            // editar usuario
            updateContact: async (contact) => { 
                try{
                    const response = await fetch(process.env.BACKEND_URL+"/updateContact",{
                        method:"PUT",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify(contact)
                    })
                    if (response.ok){
                        return (true)
                    }
                }catch(error){
                    return (error)
                }
            },


        }
    };
};

export default getState;
