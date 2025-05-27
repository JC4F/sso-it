// src/components/SilentRenew.jsx
import { useEffect } from "react";
import { userManager } from "./oauth";

export default function SilentRenew() {
  useEffect(() => {
    userManager
      .signinSilentCallback()
      .catch((err) => console.error("Silent renew error", err));
  }, []);

  return <p>Renewing session…</p>;
}
