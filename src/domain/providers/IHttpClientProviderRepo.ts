import { IHttpClientOptions, IHttpClientResponse } from "../entities/HttpClient";

export interface IHttpClientProviderRepo {
    post(url: string, options?: IHttpClientOptions): Promise<IHttpClientResponse> 
}
