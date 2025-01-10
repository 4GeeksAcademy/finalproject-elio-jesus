import React, { useContext, useState } from "react"
import { Context } from "../store/appContext";
import { Link,useNavigate } from "react-router-dom";


const EditProfile = () => {
    const { store, actions } = useContext(Context)
    const initial = {
        id:store.currentUser['id'],
        firstName: store.currentUser['firstName'],
        lastName: store.currentUser['lastName'],
        username: store.currentUser['username'],
        email:store.currentUser['email']
    }
    const [contact, setContact] = useState(initial)
    const [edited, setEdited] = useState(false)
    const navigate = useNavigate()

    const handleChange = (evt) => {
        setContact({
            ...contact,
            [evt.target.name]: evt.target.value
        });
    }

    const edit = async (contact,evt) => {
        evt.preventDefault()
        const editado = await actions.updateContact(contact)
        if (editado == 200) {
            setEdited(true)
            setTimeout(() => { setEdited(false) }, 1000)
            navigate("/login")
        }
    }

    return (
        store.token &&
        <div className="container d-flex flex-column pt-5">
            <h1 className="fs-1 text-center">Editar Usuario</h1>
            <form className="form w-50 align-self-center p-2 my-3" onSubmit={edit}>
                <div className="mb-3">
                    <label htmlFor="inputFirstName" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={contact.firstName}
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
                        value={contact.lastName}
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
                        value={contact.username}
                        id="inputUsername"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={contact.email}
                        id="inputEmail"
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* <div className="mb-3">
                           <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                           <input
                               type="password"
                               className="form-control"
                               name="password"
                               value={contact.password}
                               id="inputPassword"
                               onChange={handleChange}
                               required
                           />
                       </div> */}

                <button type="submit" className="btn boton w-100">Registrar</button>
                {edited && <div className="alert alert-success mt-3" role="alert">
                    El usuario se edito con éxito
                </div>}
            </form>


            <div className="w-50 d-flex flex-column align-self-center">
                <Link to="/">
                    <button className="btn btn-dark">Regresar</button>
                </Link>
            </div>
        </div>
    )
}

export default EditProfile