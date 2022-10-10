export class VippsAuthUrlRequestDTO {
    redirectUri: string;
    state?: string;

    constructor(redirectUri: string, state?: string) {
        this.redirectUri = redirectUri;
        this.state = state;
    }
}