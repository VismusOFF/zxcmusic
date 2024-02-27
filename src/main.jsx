import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AudioProvider from "./context/AudioContext";
import Purple from "./Purple";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AudioProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/purple" element={<Purple />} />
      </Routes>
    </AudioProvider>
  </BrowserRouter>
);