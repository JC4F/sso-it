// src/oauth.js
import ClientOAuth2 from "client-oauth2";

export const oauthClient = new ClientOAuth2({
  clientId: "ig_user-site",
  accessTokenUri: "https://accounts.hgmedia.dev/connect/token",
  authorizationUri: "https://accounts.hgmedia.dev/connect/authorize",
  redirectUri: "https://localhost:5002/authentication/login-callback",
  scopes: ["profile", "openid", "email", "ig_api", "offline_access"],
  // scopes: ["profile openid email ig_api offline_access"],
  // state nên random để chống CSRF
});
