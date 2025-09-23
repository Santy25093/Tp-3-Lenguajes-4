
import React, { useState } from "react";

const FileUploader = () => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => setPreview(event.target.result);
      reader.readAsDataURL(file);
    } else {
      alert("El archivo seleccionado no es una imagen.");
      setPreview(null);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Subir y mostrar una imagen</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div style={{ marginTop: "20px" }}>
          <img src={preview} alt="Vista previa" style={{ maxWidth: "400px" }} />
        </div>
      )}
    </div>
  );
};

export default FileUploader;
