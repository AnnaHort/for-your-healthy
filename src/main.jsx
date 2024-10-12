import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "/src/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/for-your-healthy">
      <App />
    </BrowserRouter>
  </StrictMode>
);
