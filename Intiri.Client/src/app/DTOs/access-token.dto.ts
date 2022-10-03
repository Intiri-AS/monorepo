export class AccessTokenRequestDTO {
  authorizationCode: string;
  state: string;
  scope: string;
  redirectUri: string;

  constructor(
    authorizationCode: string,
    state: string,
    scope: string,
    redirectUri: string
  ) {
    this.authorizationCode = authorizationCode;
    this.state = state;
    this.scope = scope;
    this.redirectUri = redirectUri;
  }
}
