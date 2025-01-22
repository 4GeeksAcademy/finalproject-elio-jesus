import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/profile.css"


const Profile = () => {
    const { store, actions } = useContext(Context)
    const [measures, setMeasures] = useState(null)
    const [social, setSocial] = useState(null)
    const [error, setError] = useState('')
    // const [sendStatus,setSendStatus] = useState()
    const [request, setRequest] = useState(null)
    const [save, setSave] = useState(false)
    const navigate = useNavigate()
    let hour = new Date()
    let horas = hour.getHours()

    const handleChange = (evt) => {
        setMeasures({
            ...measures,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const response = await actions.saveMeasures(measures)
        if (response == 200) {
            setSave(true)
        } else if (response == 400) {
            setError('Todos los campos son necesarios')
        }
    }

    const handleChangeSocial = (evt) => {
        setSocial({
            ...social,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmitSocial = async (evt) => {
        evt.preventDefault()
        const response = await actions.saveSocial(social)
        if (response == 200) {
            setSave(true)
        } else if (response == 400) {
            setError('Todos los campos son necesarios')
        }
    }

    const handleChangeServices = (evt) => {
        setRequest({
            ...request,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmitServices = async (evt) => {
        evt.preventDefault()
        if (!request.telephone || !request.linkedin) {
            setError('Ambos campos son obligatorios')
        }

        const response = await actions.saveRequest(request)
        if (response == 200) {
            setSave(true)
        } else if (response == 400) {
            setError('Todos los campos son necesarios')
        }
    }


    useEffect(() => { !store.token ? navigate("/login") : null }, [store.token])

    return (
        store.token &&
        <div className="container-fluid p-0">
            <div className="container-fluid fondo">
                <div className="container">
                    <div className="row justify-content-between py-3">
                        <div className="col-12 col-md-7 d-flex align-items-end">
                            <h1 className="text ps-5">{horas > 12 ? "Buenas tardes" : "Buenos dias"} {store.currentUser['firstName']}</h1>
                        </div>
                        <div className="col-12 col-md-5 text-end">
                            <img className="imagen img-thumbnail justify-content-center" src="https://i.pravatar.cc/300" alt="fotoperfil" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-md-none" style={{ height: "110px" }} ></div>
            <div className="container">
                <div className="row justify-content-between align-items-end mt-5">
                    <div className="col-12 col-md-6">
                        <div className="border border-3 rounded-3 p-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Detalles de usuario</h3>
                                <Link to="/edit_profile">
                                    Editar Información
                                </Link>
                            </div>
                            <p className="fs-5 fw-bolder data-text">Correo</p>
                            <p className="fs-6">{store.currentUser['email']}</p>
                            <p className="fs-5 fw-bolder data-text">Nombre</p>
                            <p className="fs-6">{store.currentUser['firstName']} {store.currentUser['lastName']}</p>
                            <p className="fs-5 fw-bolder data-text">Nombre de usuario</p>
                            <p className="fs-6">{store.currentUser['username']}</p>
                            <p className="fs-5 fw-bolder data-text">Cumpleaños</p>
                            <p className="fs-6">{!store.currentUser['birthDate'] ? "No cargado" : new Date(store.currentUser['birthDate']).toLocaleString('es-VE', { year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
                        </div>
                    </div>
                    <div className="d-md-none mt-3" ></div>
                    <div className="col-12 col-md-6">
                        <div className="data border border-3 rounded-3 p-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Informacion Personal</h3>
                            </div>
                            <div className="d-flex flex-row justify-content-between align-items-end ">
                                <div>
                                    <p className="fs-5 fw-bolder data-text">Peso</p>
                                    <p className="fs-6">{!store?.currentUser.measures.weight ? "No cargado" : store?.currentUser.measures.weight}</p>
                                    <p className="fs-5 fw-bolder data-text">Estatura</p>
                                    <p className="fs-6">{!store?.currentUser.measures.height ? "No cargado" : store?.currentUser.measures.height}</p>
                                    <p className="fs-5 fw-bolder data-text">Medida de cintura</p>
                                    <p className="fs-6">{!store?.currentUser.measures.waist ? "No cargado" : store?.currentUser.measures.waist}</p>
                                    <p className="fs-5 fw-bolder data-text">Medida de brazo</p>
                                    <p className="fs-6">{!store?.currentUser.measures.biceps ? "No cargado" : store?.currentUser.measures.biceps}</p>
                                </div>
                                <div >
                                    {!store.currentUser.measures ?
                                        <button type="button" className="btn text mt-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            Cargar Medidas
                                        </button> : <button type="button" className="btn text" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            Editar Medidas
                                        </button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 mt-3">
                        <div className="border border-3 rounded-3 p-5 ">
                            {!store?.currentUser.request.status && (
                                <>
                                    <h5 className="fw-bold">Quieres ofrecer tus servicios?</h5>
                                    <p>Necesitamos verificar tu currículum y experiencia en tu área</p>
                                    <button type="button" className="btn w-100 text" data-bs-toggle="modal" data-bs-target="#modal2">
                                        Cargar Info
                                    </button>
                                </>
                            )}
                            {store?.currentUser.request.status === "waiting" && (
                                <>
                                    <h5 className="fw-bold">Estamos trabajando por ti</h5>
                                    <p>Verificaremos tu informacion</p>
                                    <div className="alert alert-warning" role="alert">
                                        En espera
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-3">
                        <div className="border border-3 rounded-3 p-5">
                            <div className="d-flex justify-content-between">
                                <h5 className="fw-bold mb-2">Redes</h5>
                                <button type="button" className="btn text" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Cargar Redes
                                </button>
                            </div>
                            <div className="d-flex align-self-center">
                                <i className="fa-brands fa-instagram icono"></i>
                                <p className="ms-2">{!store?.currentUser.social ? "" : store?.currentUser.social.instagram}</p>
                            </div>
                            <div className="d-flex align-self-center mt-2">
                                <i className="fa-brands fa-square-twitter icono"></i>
                                <p className="ms-2">{!store?.currentUser.social ? "" : store?.currentUser.social.facebook}</p>
                            </div>
                            <div className="d-flex align-self-center mt-2">
                                <i className="fa-brands fa-facebook icono"></i>
                                <p className="ms-2">{!store?.currentUser.social ? "" : store?.currentUser.social.twitter}</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-3">
                        <div className="border border-3 rounded-3 p-5">
                            {/* <h5 className="fw-bold">Alergias o discapacidad</h5> */}

                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: "100px" }} ></div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title ms-3" id="staticBackdropLabel">Carga tu Información</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form w-50 align-self-center ms-3 my-3" onSubmit={handleSubmit} >
                                <div className="mb-3">
                                    <label htmlFor="inputWeight" className="form-label">Peso</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="weight"
                                        value={measures?.weight}
                                        id="inputWeight"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputHeight" className="form-label">Altura</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="height"
                                        value={measures?.height}
                                        id="inputHeight"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputBiceps" className="form-label">Biceps</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="biceps"
                                        value={measures?.biceps}
                                        id="inputBiceps"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputWaist" className="form-label">Cintura</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="waist"
                                        value={measures?.waist}
                                        id="inputWaist"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {
                                    !store?.currentUser.measures ?
                                        <button type="submit" onClick={()=>handleSubmit()} className="btn btn-primary">
                                            Guardar
                                        </button> :
                                        <button type="submit" className="btn btn-secondary">
                                            Editar
                                        </button>
                                }

                            </form>

                        </div>
                        {save && <div className="alert alert-success mt-3" role="alert">
                            Guardado con éxito
                        </div>}
                        {error && <div className="alert alert-danger w-50 align-self-center lign-bottom" role="alert">{error}
                        </div>}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cuentas de Redes</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form w-50 align-self-center ms-3 my-3" onSubmit={handleSubmitSocial} >
                                <div className="mb-3">
                                    <label htmlFor="inputIg" className="form-label">Intagram</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="ig"
                                        value={social?.ig}
                                        id="inputIg"
                                        onChange={handleChangeSocial}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputFace" className="form-label">Facebook</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="face"
                                        value={social?.face}
                                        id="inputFace"
                                        onChange={handleChangeSocial}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputTwitter" className="form-label">Twitter</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="twitter"
                                        value={social?.twitter}
                                        id="inputTwitter"
                                        onChange={handleChangeSocial}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </form>
                        </div>
                        {save && <div className="alert alert-success mt-3" role="alert">
                            Guardado con éxito
                        </div>}
                        {error && <div className="alert alert-danger w-50 align-self-center lign-bottom" role="alert">{error}
                        </div>}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="modal fade" id="modal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal2">Envia los requerimientos</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form w-50 align-self-center ms-3 my-3" onSubmit={handleSubmitServices} >
                                <div className="mb-3">
                                    <label htmlFor="inputURL" className="form-label">URL de tu Linkedin</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        name="linkedin"
                                        value={request?.url}
                                        id="inputURL"
                                        onChange={handleChangeServices}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputTel" className="form-label">Numero de contacto</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="telephone"
                                        value={request?.phoneNumber}
                                        id="inputTel"
                                        onChange={handleChangeServices}
                                        required
                                    />
                                </div>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    name="profession"
                                    value={request?.profession}
                                    onChange={handleChangeServices}
                                >
                                    <option defaultValue>Marque su profesion</option>
                                    <option value="Entrenador">Entrenador</option>
                                    <option value="Fisioterapeuta">Fisioterapeuta</option>
                                    <option value="Nutricionista">Nutricionista</option>
                                </select>
                                <button type="submit" className="btn btn-primary mt-2">Enviar</button>

                            </form>
                        </div>
                        {save && <div className="alert alert-success mt-3" role="alert">
                            Enviado con éxito
                        </div>}
                        {error && <div className="alert alert-danger w-50 align-self-center lign-bottom" role="alert">{error}
                        </div>}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>




    )
}

export default Profile