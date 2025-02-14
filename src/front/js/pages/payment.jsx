import React from "react";
import FormWallet from "../component/formWallet.jsx";
import { PaypalButton } from "../component/paypalButton.jsx";





const Payment = () => {
    return (
        <>
            <div className="container d-flex justify-content-center mt-5" >
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link color active" 
                                id="pills-home-tab" 
                                data-bs-toggle="pill" 
                                data-bs-target="#pills-home" 
                                type="button" 
                                role="tab" 
                                aria-controls="pills-home" 
                                aria-selected="true"
                        >
                                <i class="fa-solid fa-wallet"></i>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link color" 
                                id="pills-profile-tab" 
                                data-bs-toggle="pill" 
                                data-bs-target="#pills-profile" 
                                type="button" 
                                role="tab"
                                aria-controls="pills-profile" 
                                aria-selected="false"
                        >
                            <i class="fa-brands fa-paypal"></i>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane 
                    fade show active" 
                    id="pills-home" 
                    role="tabpanel" 
                    aria-labelledby="pills-home-tab"
                >
                    <FormWallet/>

                </div>
                <div className="tab-pane fade" 
                    id="pills-profile" 
                    role="tabpanel" 
                    aria-labelledby="pills-profile-tab"    
                >
                    <PaypalButton/>
                </div>
            </div>
        </>
    )
}

export default Payment;