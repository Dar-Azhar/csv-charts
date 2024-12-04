import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { Graphs } from "./Pages/Graphs";
import FileUpload from "./Pages/FileUpload";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FileUpload />} />
        <Route path="/graphs" element={<Graphs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
