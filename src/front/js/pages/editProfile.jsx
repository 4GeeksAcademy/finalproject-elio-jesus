import React, { useContext, useState, useEffect } from "react"
import { Context } from "../store/appContext";
import { Link,useNavigate } from "react-router-dom";


const EditProfile = () => {
    const { store, actions } = useContext(Context)
    const [contact, setContact] = useState(store.currentUser)
    const [edited, setEdited] = useState()
    const navigate = useNavigate()

    const handleChange = (evt) => {
        setContact({
            ...contact,
            [evt.target.name]: evt.target.value
        });
    }

    const edit = async (event,contact) => {
        event.preventDefault()
        const editado = await actions.updateContact(contact)
        if (editado == 200) {
            setEdited(true)
            navigate("/profile")
        }
    }

    // useEffect(()=>{setContact(store.currentUser)},[])

    return (
        store.token &&
        <div className="container d-flex flex-column pt-5">
            <h1 className="fs-1 text-center">Editar Usuario</h1>
            <form className="form w-50 align-self-center p-2 my-3" onSubmit={(event)=>edit(event,contact)}>
                <div className="mb-3">
                    <label htmlFor="inputFirstName" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={contact?.firstName}
                        id="inputFirstName"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputLastName" className="form-label">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={contact?.lastName}
                        id="inputLastName"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={contact?.username}
                        id="inputUsername"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                           <label htmlFor="inputBirthDate" className="form-label">Fecha de nacimiento</label>
                           <input
                               type="date"
                               className="form-control"
                               name="birthDate"
                               value={contact?.birthDate || ""}
                               id="inputBirthDate"
                               onChange={handleChange}
                           />
                </div>
                <div className="mb-3">
                           <label htmlFor="inputAvatar" className="form-label">Foto de perfil</label>
                           <input
                               type="file"
                               className="form-control"
                               name="avatar"
                               value={contact?.avatar || ""}
                               id="inputAvatar"
                               onChange={handleChange}
                           />
                </div>

                <button type="submit" className="btn boton w-100">Editar</button>
                {edited && <div className="alert alert-success mt-3" role="alert">
                    El usuario se edito con éxito
                </div>}
            </form>


            <div className="w-50 d-flex flex-column align-self-center">
                <Link to="/profile">
                    <button className="btn btn-dark">Regresar</button>
                </Link>
            </div>
        </div>
    )
}

export default EditProfile