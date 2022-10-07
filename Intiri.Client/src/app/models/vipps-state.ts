export class VippsState {
    returnUri: string;
    extra?: string;

    constructor(returnUri: string, extra?: string) {
        this.returnUri = returnUri;
        this.extra = extra;
    }
}