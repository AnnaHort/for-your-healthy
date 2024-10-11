import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import App from "/src/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/for-your-healthy">
      <App />
    </BrowserRouter>
  </StrictMode>
);

// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store.js";
// import { PersistGate } from "redux-persist/integration/react";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter basename="/HealthyHub">
//           <App />
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
