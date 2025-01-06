import React, {useContext,useEffect} from "react";
import { Context } from "../store/appContext";



const Profile = () =>{
    const {store,actions} = useContext(Context)
    useEffect(()=>{!store.token ?  navigate("/login"):null},[store.token])
    return(
        store.token && //pregunta esto
        <div>
            <h1>Bienvenido {store.currentUser['username']}</h1>
        </div>
    )
}

export default Profile