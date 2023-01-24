import React, { useState } from "react"
import PropTypes from "prop-types";
import "../styles/checkout.css"
import emailjs from "@emailjs/browser";

function CheckOut({grandTotal, cartItems}) {
    const items = cartItems.reduce((accumulator, item) => accumulator + `${item.name} x ${item.quantity} = $${item.totalCost}` + "\n", "Items:\n")
    const [dataForm, setDataForm] = useState({
        nombre: "",
        apellido: "",
        tarjeta: "",
        ciudad: "",
        provincia: "",
        direccion: "",
        email: "",
        grandTotal: grandTotal,
        items: items
    })

    

    function handleChange(event) {
        const value = event.target.value
        const name = event.target.name
        setDataForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    
    async function handleSubmit(event){
        event.preventDefault();
        emailjs.send(
            `${process.env.REACT_APP_SERVICE_KEY}`,
            `${process.env.REACT_APP_TEMPLATE_KEY}`,
            dataForm,
            `${process.env.REACT_APP_PUBLIC_KEY}`
        )
    }

    return (
        <div className="checkout">
            <h1>Orden del pedido</h1>
            <form id="form" className="checkout-info" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre y Apellido</label>
                <div className="inner-div">
                    <input type="text" value={dataForm.nombre} id="nombre" name="nombre" placeholder="Nombre" onChange={handleChange}/>
                    <input type="text" value={dataForm.apellido} id="apellido" name="apellido" placeholder="Apellido" onChange={handleChange}/>
                </div>
                <label htmlFor="tarjeta-credito">Tarjeta de credito</label>
                <input type="tel" value={dataForm.tarjeta} id="tarjeta-credito" name="tarjeta-credito" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" placeholder="1111-1111-1111-1111" onChange={handleChange}/>
                <label htmlFor="ubicacion">Ubicacion</label>
                <div className="inner-div">
                    <input type="text" value={dataForm.ciudad} id="ubicacion" name="ciudad" placeholder="Ciudad" onChange={handleChange}/>
                    <input type="text" value={dataForm.provincia} id="provincia" name="provincia" placeholder="Provincia" onChange={handleChange}/>
                </div>
                <label htmlFor="direccion">Direccion</label>
                <input type="text" value={dataForm.direccion} id="direccion" name="direccion" placeholder="Calle 1234" onChange={handleChange}/>
                <label htmlFor="email">Email*</label>
                <input type="email" value={dataForm.email} id="email" name="email" placeholder="email@email.com" onChange={handleChange} required/>
            </form>
            <div className="cart-total">
                <p>Grand Total: ${grandTotal}</p>
            </div>
            <button className="checkout-btn" type="submit" form="form">CHECKOUT</button>
        </div>
    )
}

CheckOut.propTypes = {
    grandTotal: PropTypes.number,
    cartItems: PropTypes.array
}

export default CheckOut