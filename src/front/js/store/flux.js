const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            message: null,
            contacts: [] // Añadir lista de contactos al store
        },
        actions: {
            getMessage: async () => {
                try {
                    const resp = await fetch(process.env.BACKEND_URL + "/api/");
                    const data = await resp.json();
                    setStore({ message: data.message });
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            // Nueva acción para guardar contacto
            saveContact: async (contact) => {
                try {
                    const response = await fetch("/api/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contact)
                    });

                    const result = await response.json();
                    if (response.ok) {
                        setStore({ contacts: [...getStore().contacts, result.user] });
                        return true;
                    } else {
                        console.error(result.message);
                        return false;
                    }
                } catch (error) {
                    console.error("Error registrando el usuario", error);
                    return false;
                }
            }
        }
    };
};

export default getState;
