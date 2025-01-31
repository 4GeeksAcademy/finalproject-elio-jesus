
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: JSON.parse(localStorage.getItem("token")) || null,
            currentUser: JSON.parse(localStorage.getItem("currentUser")) ?? null,
            users: []
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
                            "Authorization": `Bearer ${getStore().token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contact)
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

            //obtener user
            // getUser: async () => {
            //     try {
            //         const response = await fetch(process.env.BACKEND_URL + "/getUser", {
            //             method: "GET",
            //             headers: {
            //                 "Authorization": `Bearer ${getStore().token}`,
            //             }
            //             return (response.status);

            //         } catch (error) {
            //             return (error);
            //         }
            //     },

            // obtener usuarios
            // getUsers: async () => {
            //     try {
            //         const response = await fetch(process.env.BACKEND_URL + "/getUsers", {
            //             method: "GET",
            //             headers: {
            //                 "Authorization": `Bearer ${getStore().token}`
            //             }
            //         });
            //         const data = await response.json();

            //         if (response.ok) {
            //             setStore({ users: data.users });
            //         }
            //         return (response.status);

            //     } catch (error) {
            //         return (error);
            //     }
            // },



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

                } catch (error) {

                }
            },
            // saveExercises
            addExercise: async (exercise) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/saveExercise", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${getStore().token}`,
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify(exercise)
                    });
                    if (response.ok) {
                        getActions().getUser();
                    }
                    return response.status;
                } catch (error) {
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

                } catch (error) {

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
            }
        }
    };
};

export default getState;
