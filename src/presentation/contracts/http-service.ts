export interface IRequest {
  body: never;
}

export interface IResponse {
  body: unknown;
  statusCode: number;
}

export interface IHttpService {
  handle(request: IRequest): Promise<IResponse>;
}
