
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: JSON.parse(localStorage.getItem("token")) || null,
            currentUser: JSON.parse(localStorage.getItem("currentUser")) ?? null,
            users: [],
            usersRequest: []
        },
        actions: {
            //  guardar contacto
            saveContact: async (contact) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/register", {
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
                    const response = await fetch(process.env.BACKEND_URL + "/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(credentials)
                    });

                    const result = await response.json();
                    if (response.ok) {
                        setStore({
                            token: result.token,
                            currentUser: result.currentUser
                        })
                        localStorage.setItem("token", JSON.stringify(result.token))
                        localStorage.setItem("currentUser", JSON.stringify(result.currentUser))
                    }
                    return (response.status)

                } catch (error) {
                    return (error)
                }
            },


            //cerrar sesion
            close: () => {
                setStore({
                    token: null,
                    currentUser: null
                })
                localStorage.removeItem("token")
                localStorage.removeItem("currentUser")
            },

            // editar usuario
            updateContact: async (contact) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/updateContact", {
                        method: "PUT",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`
                        },
                        body: contact
                    })

                    if (response.ok) {
                        getActions().getUser()
                    }
                    return (response.status)
                } catch (error) {
                    return (error)
                }
            },

            //guardar medidas
            saveMeasures: async (measures) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/saveMeasures", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(measures)
                    })

                    if (response.ok) {
                        getActions().getUser()
                    }
                    return (response.status)

                } catch (error) {
                    return (error)
                }
            },

            //obtener informacion de usuario
            getUser: async () => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/getUser", {
                        method: "GET",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                        }
                    })
                    const data = await response.json()
                    if (response.ok) {
                        setStore({ currentUser: data.currentUser })
                        localStorage.setItem('currentUser', JSON.stringify(data.currentUser))
                    }
                    return (response.status)
                } catch (error) {
                    return (error)
                }
            },

            //obtener informacion sin actual
            getUser2: async (user_id) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/getUser2", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(user_id)
                    })
                    const data = await response.json()
                    if (response.ok) {
                        return (data)
                    }
                    return (response.status)
                } catch (error) {
                    return (error)
                }
            },

            //editar medidas
            updateMeasures: async (measures) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/updateMeasures", {
                        method: "PUT",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(measures)
                    })

                    if (response.ok) {
                        getActions().getUser()
                    }
                    return (response.status)

                } catch (error) {
                    return (error)
                }
            },

            //guardar social
            saveSocial: async (social) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/saveSocial", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify(social)
                    })
                    if (response.ok) {
                        getActions().getUser()
                    }
                    return (response.status)

                } catch (error) {
                    return (error)
                }
            },

            saveRequest: async (request) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/saveRequest", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(request)
                    })
                    if (response.ok) {
                        getActions().getUser()
                    }
                    return (response.status)
                } catch (error) {
                    return (error)
                }
            },

            updateStatus: async (status) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/updateStatus", {
                        method: "PUT",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify(status)
                    })
                    if (response.ok) {
                        getActions().getUser()
                    }

                } catch (error) {

                }
            },
            // saveExercises
            addExercise: async (exercise) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/saveExercise`, {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(exercise)
                    });

                    return response.status;
                } catch (error) {
                    console.error("Error al agregar el ejercicio:", error);
                    return error;
                }
            },

            //editar social
            updateSocial: async (social) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/updateSocial", {
                        method: "PUT",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(social)
                    })

                    if (response.ok) {
                        getActions().getUser()
                    }
                    return (response.status)

                } catch (error) {
                    return (error)
                }
            },

            saveRequest: async (request) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/saveRequest", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(request)
                    })
                    if (response.ok) {
                        getActions().getUser()
                    }
                    return (response.status)
                } catch (error) {
                    return (error)
                }
            },

            // getStatus: async () => {
            //     try {
            //         const response = await fetch(process.env.BACKEND_URL + "/getStatus", {
            //             method: "GET",
            //             headers: {
            //                 "Authorization": `Bearer ${getStore().token}`,
            //             }
            //         })
            //         const data = await response.json()

            //         if (response.ok) {
            //             return (data, response.status)

            //         }

            //     } catch (error) {
            //         return (error)
            //     }

            // },

            updateStatus: async (status) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/updateStatus", {
                        method: "PUT",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify(status)
                    })
                    if (response.ok) {
                        getActions().getUser()
                    }
                    return response.status
                } catch (error) {
                    return (error)
                }
            },

            updateRol: async (rol) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/updateRol", {
                        method: "PUT",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify(rol)
                    })
                    if (response.ok) {
                        getActions().getUser()
                    }

                    return response.status
                } catch (error) {
                    return (error)
                }
            },

            resetPassword: async (email) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + '/reset_password', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(email)
                    })
                    return (response.status)
                } catch (error) {
                    return (error)
                }
            },

            updatePassword: async (token, newpassword) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/update_password", {
                        method: "PUT",
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newpassword)
                    })

                    return (response.status)

                } catch (error) {
                    return (error)
                }
            },

            getExercisesGroup: async (muscle_group) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/getExercisesGroup/${muscle_group}`, {
                        method: "GET",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            "Content-Type": "application/json"
                        }
                    });
                    const data = await response.json();
                    if (response.ok) {
                        return data.exercises;
                    }
                    return response.status;
                } catch (error) {
                    console.error("Error al obtener los ejercicios:", error);
                    return error;
                }
            },

            getAlluserRequest: async () => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/getAlluserRequest", {
                        method: "GET",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            "Content-Type": "application/json"
                        }
                    })
                    const data = await response.json()
                    if (response.ok) {
                        setStore({
                            usersRequest: data.solicitudes
                        })
                    }
                    return (response.status)
                } catch (error) {
                    return (error)
                }
            },

            getUserForRol: async (rol) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/getUserForRol`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(rol)
                    })
                    const data = await response.json();
                    if (response.ok) {
                        return (data)
                    }
                } catch (error) {
                    return (error)
                }
            }
        }
    }

};



export default getState;
