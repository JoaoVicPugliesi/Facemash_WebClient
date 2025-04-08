import { IHttpClientOptions, IHttpClientResponse } from "../../domain/entities/HttpClient";
import { IHttpClientProviderRepo } from "../../domain/providers/IHttpClientProviderRepo";
import { iAxios } from "../../domain/services/axios";

export class IAxiosHttpClientProviderRepoImpl implements IHttpClientProviderRepo {
    async provide(url: string, options?: IHttpClientOptions): Promise<IHttpClientResponse> {
        const response = await iAxios.post(url, options?.body, {
            method: options?.method,
            headers: options?.headers,
            data: options?.body
        });

        const data = await response.data;

        return {
            status: response.status,
            body: data
        }
    }
}
