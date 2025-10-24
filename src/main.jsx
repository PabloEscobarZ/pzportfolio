import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// Importa l'istanza di configurazione
import './i18n';

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/pzportfolio">
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
