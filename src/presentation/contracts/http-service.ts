export interface IRequest {
  body: any;
  params: any;
}

export interface IResponse {
  body: unknown;
  statusCode: number;
}

export interface IHttpService {
  handle(request: IRequest): Promise<IResponse>;
}
