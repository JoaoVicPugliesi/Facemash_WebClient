import { IHttpClientOptions, IHttpClientResponse } from "../entities/HttpClient";

export interface IHttpClientProviderRepo {
    provide(url: string, options?: IHttpClientOptions): Promise<IHttpClientResponse> 
}
