// src/oauth.js
import ClientOAuth2 from "client-oauth2";
import { UserManager, WebStorageStateStore } from "oidc-client";

export const oauthClient = new ClientOAuth2({
  clientId: "ig_user-site",
  accessTokenUri: "https://accounts.hgmedia.dev/connect/token",
  authorizationUri: "https://accounts.hgmedia.dev/connect/authorize",
  redirectUri: "https://localhost:5002/authentication/login-callback",
  scopes: ["profile", "openid", "email", "ig_api", "offline_access"],
  // scopes: ["profile openid email ig_api offline_access"],
  // state nên random để chống CSRF
});

export const oauthClient2 = {
  client_id: "ig_user-site",
  // accessTokenUri: "https://accounts.hgmedia.dev/connect/token",
  authority: "https://accounts.hgmedia.dev/",
  redirect_uri: "https://localhost:5002/authentication/login-callback",
  // scopes: ["profile", "openid", "email", "ig_api", "offline_access"],
  post_logout_redirect_uri: "https://localhost:5002",
  scope: "profile openid email ig_api offline_access",
  response_type: "code",
  userStore: new WebStorageStateStore({ store: window.localStorage }),

  // automaticSilentRenew: true,
  // includeIdTokenInSilentRenew: true
  // state nên random để chống CSRF
};

export const userManager = new UserManager(oauthClient2);
