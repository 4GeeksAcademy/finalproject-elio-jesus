import React from "react"
import { Link } from "react-router-dom"



const FormWallet = () => {
    return (
        <div className="container d-flex justify-content-between pt-4">
            <div className="col-12 col-md-7 border border-3 p-3">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <label htmlFor="card">Card #</label>
                        <input className="form-control" type="text" id="card" placeholder="XXXXXXXXXXX" />
                    </div>
                    <div className="col-12 col-md-3">
                        <label htmlFor="cvc">CVC #</label>
                        <input className="form-control" type="password" placeholder="***" id="cvc" name="backcode" />
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor="amount">Amount</label>
                        <input className="form-control" type="text" id="amount" name="payment" defaultValue="$15" />
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col-12 ">
                        <label htmlFor="first-name">Name</label>
                        <input className="form-control" type="text" id="first-name" name="FName" />

                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" id="city" name="direction" />

                        <h5>We accept:</h5>
                        <div className="p-3 mb-2 background-black text-white">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1"><i
                                    className="fa-brands fa-cc-mastercard"></i></label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2"><i className="fa-brands fa-cc-visa"></i></label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                    value="option3" />
                                <label className="form-check-label" htmlFor="inlineRadio3"><i className="fa-brands fa-cc-amex"></i></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-outline-success w-100" >Pagar</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div className="container background-black p-3">
                    <h2 className="text">Realiza tu pago para trabajar con nosotros</h2>
                    <p className="text">Este pago se efectuara mensualmente luego de que tengamos tus datos,
                        todo estara perfectamente cifrado para cuidar tu información </p>
                    <Link to="/">
                        <p className="text">Lee aqui nuestras políticas</p>
                    </Link>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"  id="flexCheckDefault"/>
                            <label class="form-check-label text" for="flexCheckDefault">
                                Acepto
                            </label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FormWallet