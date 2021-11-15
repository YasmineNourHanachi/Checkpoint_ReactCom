import React from "react";
import "./App.css";
import Name from "./Componement/Profil/FullName";
import Adress from "./Componement/Profil/Adress";
import Photo from "./Componement/Profil/ProfilPhoto";

function App() {
  return (
    <div className="App">
      <Photo />
      <Name />
      <Adress />
    </div>
  );
}

export default App;
