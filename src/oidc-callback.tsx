// src/components/OidcCallback.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userManager } from "./oauth";
export default function OidcCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    userManager
      .signinRedirectCallback()
      .then((user) => {
        // user chứa access_token, id_token, profile, expires
        console.log("Logged in user", user);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.error("OIDC callback error", err);
        navigate("/", { replace: true });
      });
  }, [navigate]);

  return <p>Đang xử lý đăng nhập OIDC…</p>;
}
