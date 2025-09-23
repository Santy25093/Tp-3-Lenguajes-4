
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contacto() {
  const form = useRef();
  const [estado, setEstado] = useState("");

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ec18e9l",   
        "template_wtvbgq9",  
        form.current,
        "n_hHkJpPZF29RbaxB" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setEstado("✅ Correo enviado con éxito!");
        },
        (error) => {
          console.log(error.text);
          setEstado("❌ Error al enviar el correo.");
        }
      );
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form ref={form} onSubmit={enviarCorreo}>
        <label>Nombre:</label>
        <input type="text" name="from_name" required />

        <label>Correo:</label>
        <input type="email" name="from_email" required />

        <label>Mensaje:</label>
        <textarea name="message" required />

        <button type="submit">Enviar</button>
      </form>

      <p>{estado}</p>
    </div>
  );
}

