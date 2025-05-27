// src/components/OAuthCallback.jsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { oauthClient } from "./oauth";

export default function OAuthCallback() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Lấy full URL hiện tại (bao gồm fragment/hash nếu implicit grant)
    const fullUrl = window.location.href;

    oauthClient.token
      .getToken(fullUrl)
      .then((user) => {
        // Ví dụ lưu token vào localStorage hoặc Context
        localStorage.setItem("accessToken", user.accessToken);
        // Chuyển về trang Home
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.error("OAuth error:", err);
        // Có thể điều hướng về trang lỗi
        navigate("/", { replace: true });
      });
  }, [navigate, location]);

  return <p>Đang xử lý xác thực…</p>;
}
