import React,{ useState,useContext, useEffect} from "react";
import { Context } from "../store/appContext"
import { useSearchParams, useNavigate } from "react-router-dom";
import "../../styles/login.css"

const UpdatePassword = () => {
    const {store,actions} = useContext(Context)
    const [searchParams, ] = useSearchParams()
    const navigate = useNavigate()
    const [update,setUpdate] = useState(false)
    const [password,setPassword] = useState(null)
    const [error, setError] = useState('')

    const handleChange = (evt) =>{
        setPassword({
            ...password,
            [evt.target.name]:evt.target.value
        })
    }

    const handleSubmit = async (evt) =>{
        evt.preventDefault()
        if(!password.password1||!password.password2) {
            setError('Tienes que enviar los dos correos')
        }else{
            if(password.password1!=password.password2){
                setError('Los correos no coinciden')
            }else{
               const response = await actions.updatePassword(searchParams.get('token'),password) 
               if(response == 200){
                setUpdate(true)
                navigate("/login")
                setTimeout(() => {setUpdate(false)}, 2000)
               }else if(response == 500){
                    setError("Error en los servidores, por favor intente mas tarde")
               }
            }
    
        }
    }
    console.log(searchParams.get('token'))

    useEffect(()=>{!searchParams.get('token')? navigate('/'):null },[])
    return (
        searchParams.get('token')&&
        <div className="container d-flex flex-column traslate2">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                <h1 className="fs-1 text-center pb-5">Cambio de Contraseña</h1>
                    <form className="p-4 border"onSubmit={handleSubmit}>
                        <div className="mb-3 ">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword1" 
                                name="password1"
                                onChange={handleChange}
                                value={password?.password1}
                                required
                            />
                                <div id="password1" className="form-text">Escribe tu contraseña nueva</div>
                        </div>
                        <div className="mb-3 ">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword2" 
                                name="password2"
                                onChange={handleChange}
                                value={password?.password2}
                                required
                            />
                                <div id="password2" className="form-text">Escriba nuevamente tu contraseña</div>
                        </div>
                        <button type="submit" className="btn boton1 w-100">Cambiar Contraseña</button>
                    </form>
                    {update && <div className="alert alert-success mt-3" role="alert">
                        Contraseña actualizada con exito
                    </div>}
                    {error && <div className="alert alert-danger w-50 align-self-center lign-bottom" role="alert">{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default UpdatePassword