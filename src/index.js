import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import CryptoContext from "./context/CryptoContext";
import "./index.css";
import "react-alice-carousel/lib/alice-carousel.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </StrictMode>
);
