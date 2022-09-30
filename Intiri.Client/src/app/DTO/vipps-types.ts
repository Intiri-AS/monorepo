export class AccessTokenRequestDTO {
  authorizationCode: string;
  state: string;
  scope: string;
  redirectUri: string;
};
