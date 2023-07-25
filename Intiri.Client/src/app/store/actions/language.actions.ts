import { Action } from "@ngrx/store";

export const SET = '[Language] Set';
export const GET = '[Language] Get';

export class Set implements Action {
  readonly type: string = SET;
  constructor (public payload: string) {}
}

export class Get implements Action {
  readonly type: string = GET;
  constructor (public payload?: any) {}
}

export type All = Set | Get;
