import React,{useActionState, useState,useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css"

const ResetPassword = () => {
    const {store,actions} = useContext(Context)
    const [email,setEmail] = useState(null)
    const [send,setSend] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (evt) =>{
        setEmail({
            [evt.target.name]:evt.target.value
        })
    }

    const handleSubmit = async (evt) =>{
        evt.preventDefault()
        if(!email.email) {
            setError('Tienes que enviar tu correo')
        }else{
            const response = await actions.resetPassword(email)
            if (response == 200){
                setSend(true)
                setTimeout(() => {setSend(false)}, 2000)
            }else if (response==404){
                setError('Este email no se encuentra en nuestra base de datos')
            }else{
                setError('Error en los servidores, por favor intente mas tarde')
            }
    
        }
    }
    return (
        <div className="container d-flex flex-column traslate2">
            <div className="row justify-content-center ">
                <div className="col-12 col-md-6">
                <h1 className="fs-1 text-center pb-5">Restablecer Contraseña</h1>
                    <form className="p-4 border"onSubmit={handleSubmit}>
                        <div className="mb-3 ">
                            <label htmlFor="exampleInputEmail1" className="form-label">Correo Electronico</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="email"
                                name="email"
                                onChange={handleChange}
                                value={email?.email}
                                required
                            />
                                <div id="email" className="form-text">Escribe el correo que está registrado en la plataforma</div>
                        </div>
                        <button type="submit" className="btn boton1 w-100">Recuperar</button>
                    </form>
                    {send && <div className="alert alert-success mt-3" role="alert">
                        Revise su correo poder validar su información
                    </div>}
                    {error && <div className="alert alert-danger w-50 align-self-center lign-bottom" role="alert">{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default ResetPassword