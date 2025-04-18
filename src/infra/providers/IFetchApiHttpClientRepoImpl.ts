import { baseURL } from "../../domain/providers/IBaseUrl";
import { IHttpClientOptions, IHttpClientResponse } from "../../domain/entities/HttpClient";
import { IHttpClientProviderRepo } from "../../domain/providers/IHttpClientProviderRepo";

export class IFetchApiHttpClientProviderRepoImpl implements IHttpClientProviderRepo {
    async provide(url: string, options?: IHttpClientOptions): Promise<IHttpClientResponse> {
        const response = await fetch(`${baseURL}${url}`, {
            method: options?.method,
            headers: options?.headers,
            body: options?.body as BodyInit
        });

        const data = await response.json();

        return {
            ok: response.ok,
            status: response.status,
            body: data
        };
    }
}