// src/components/AuthButtons.jsx
import { useState, useEffect } from "react";
import { userManager } from "./oauth";
import type { User } from "oidc-client";

export default function AuthButtons() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    userManager.getUser().then((u) => {
      setUser(u);
      if (!u) {
        userManager.signinRedirect();
      }
    });
    // lắng nghe sự kiện login/logout
    userManager.events.addUserLoaded((u) => setUser(u));
    userManager.events.addUserUnloaded(() => setUser(null));
  }, []);

  //   useEffect(() => {
  //     if (!user) {
  //       userManager.signinRedirect();
  //     }
  //   }, []);

  const login = () => {
    userManager.signinRedirect();
  };

  const logout = () => {
    userManager.signoutRedirect();
  };

  if (!user) {
    return <button onClick={login}>Login</button>;
  } else {
    return (
      <>
        <span>Xin chào, {user?.profile?.name}</span>
        <button onClick={logout}>Logout</button>
      </>
    );
  }
}
