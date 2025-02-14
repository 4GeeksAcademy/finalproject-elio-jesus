import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";




export const PaypalButton = (props)  =>{
    const initialOptions = {
        clientId: process.env.PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture",
    };

    function createOrder(data,actions) {
        // return fetch("/my-server/create-paypal-order", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     // use the "body" param to optionally pass additional order information
        //     // like product ids and quantities
        //     body: JSON.stringify({
        //         cart: [
        //             {
        //                 id: "YOUR_PRODUCT_ID",
        //                 quantity: "YOUR_PRODUCT_QUANTITY",
        //             },
        //         ],
        //     }),
        // })
        //     .then((response) => response.json())
        //     .then((order) => order.id);
        return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        value: '10.00' // Reemplaza con el monto deseado
                    }
                }
            ]
        });
    }
    function onApprove(data) {
        console.log(data)
    }
    
    return(
        <div className="container d-flex flex-column justify-content-center">
            <h1>Seleccione metodo:</h1>
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </PayPalScriptProvider>
        </div>
    )
}