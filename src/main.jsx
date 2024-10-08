import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
import App from "../src/App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/for-your-healthy">
      <App />
    </BrowserRouter>
  </StrictMode>
);
