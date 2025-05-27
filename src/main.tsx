import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import OidcCallback from "./OidcCallback.tsx";
import SilentRenew from "./slient-renew.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/authentication/login-callback"
          element={<OidcCallback />}
        />
        <Route path="/authentication/silent-renew" element={<SilentRenew />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
