
import React from "react";
import FileUploader from "./components/FileUploader";

function App() {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", null, "TP2 - Lenguajes IV"),
    React.createElement(FileUploader, null)
  );
}

export default App;
