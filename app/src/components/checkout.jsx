import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "./Context";
import "./checkout.css";

function Checkout() {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [dni, setDni] = useState("");
  const [metodoEntrega, setMetodoEntrega] = useState("");
  const navigate = useNavigate();

  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  const handleConfirmarCompra = async (e) => {
    e.preventDefault();

    const mensaje = `
Hola, soy ${nombre}.
He realizado una compra con los siguientes detalles:

- Productos:
${carrito
  .map(
    (producto) =>
      `  * ${producto.nombre} (Cantidad: ${producto.cantidad}, Precio: $${producto.precio})`
  )
  .join("\n")}
- Total: $${total}
- DNI: ${dni}
- Dirección: ${direccion}
- Teléfono: ${telefono}
- Método de Entrega: ${metodoEntrega}

¡Gracias!
    `.trim();

    // Número de WhatsApp del vendedor
    const numeroVendedor = "5493416908011";
    const encodedMessage = encodeURIComponent(mensaje);

    // WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${numeroVendedor}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // También enviar al correo vía Formspree
    const formData = {
      nombre,
      telefono,
      direccion,
      dni,
      metodoEntrega,
      carrito,
      total,
    };

    try {
      const response = await fetch("https://formspree.io/f/xzzpavpe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Gracias por su compra. El vendedor se comunicará con usted.");
        vaciarCarrito();
        navigate("/");
      } else {
        alert("Hubo un problema al enviar el formulario. Intente nuevamente.");
      }
    } catch (error) {
      alert("Error al enviar los datos. Intente nuevamente.");
    }
  };

  const handleAnularCompra = () => {
    vaciarCarrito();
    navigate("/");
  };

  return (
    <div className="formContainer">
      <h2>Checkout</h2>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - Cantidad: {producto.cantidad} - Precio: $
            {producto.precio}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>

      <div>
        <input
          className="input"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
        className="input"
        type="text"
        placeholder="Teléfono (sin 0 ni 15)"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />

        <div className="metodoEntregaContainer">
          <h3>Selecciona cómo recibir tu pedido:</h3>
          <label>
            <input
              type="radio"
              name="entrega"
              value="Retirar en tienda"
              onChange={(e) => setMetodoEntrega(e.target.value)}
              checked={metodoEntrega === "Retirar en tienda"}
            />
            Retirar en tienda
          </label>
          <label>
            <input
              type="radio"
              name="entrega"
              value="Recibir envío"
              onChange={(e) => setMetodoEntrega(e.target.value)}
              checked={metodoEntrega === "Recibir envío"}
            />
            Recibir envío
          </label>
        </div>
      </div>

      <button onClick={handleConfirmarCompra}>Confirmar Compra</button>
      <button onClick={handleAnularCompra}>Anular Compra</button>
    </div>
  );
}

export default Checkout;
