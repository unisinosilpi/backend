export interface IRequest {
  body: unknown;
}

export interface IResponse {
  body: unknown;
  statusCode: number;
}

export interface IHttpService {
  handle(request: IRequest): IResponse;
}
