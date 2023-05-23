import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FeaturesProvider } from "./contexts/FeaturesContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <FeaturesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FeaturesProvider>
);
