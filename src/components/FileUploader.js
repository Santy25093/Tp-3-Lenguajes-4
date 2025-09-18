
import React, { useState } from "react";

const FileUploader = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImage(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("El archivo seleccionado no es una imagen.");
        setImage(null);
        event.target.value = ""; 
      }
    }
  };

  return React.createElement(
    "div",
    { style: { textAlign: "center", marginTop: "20px" } },
    React.createElement("h2", null, "Subir y mostrar una imagen con API File"),
    React.createElement("input", {
      type: "file",
      accept: "image/*",
      onChange: handleFileChange,
    }),
    image &&
      React.createElement(
        "div",
        {
          style: {
            marginTop: "20px",
            maxWidth: "400px",
            border: "2px solid #ccc",
            padding: "10px",
          },
        },
        React.createElement("p", null, React.createElement("strong", null, "Vista previa:")),
        React.createElement("img", {
          src: image,
          alt: "Imagen seleccionada",
          style: { maxWidth: "100%", height: "auto" },
        })
      )
  );
};

export default FileUploader;
