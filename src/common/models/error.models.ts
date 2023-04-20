export interface ErrorWithCause<T> {
  name: T;
  message: string;
  cause: unknown;
}

export class ErrorBase<T extends string> extends Error {
  name: T;
  message: string;
  cause: unknown;

  constructor(error: ErrorWithCause<T>) {
    super();
    this.name = error.name;
    this.message = error.message;
    this.cause = error.cause;
  }
}

export class UserError extends ErrorBase<
  "GET_USER_ERROR" | "CREATE_USER_ERROR"
> {}
export class StreamError extends ErrorBase<
  | "GET_STREAM_ERROR"
  | "CREATE_STREAM_ERROR"
  | "UPDATE_STREAM_ERROR"
  | "DELETE_STREAM_ERROR"
> {}
export class NetworkError extends ErrorBase<"NETWORK_ERROR"> {}
export class WalletError extends ErrorBase<
  "CONNECT_WALLET_ERROR" | "DISCONNECT_WALLET_ERROR" | "GET_DATA_ERROR"
> {}
