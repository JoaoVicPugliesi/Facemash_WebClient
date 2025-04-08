import { IHttpClientOptions, IHttpClientResponse } from "../../domain/entities/HttpClient";
import { IHttpClientProviderRepo } from "../../domain/providers/IHttpClientProviderRepo";

export class IHttpClientDecorator implements IHttpClientProviderRepo {
    constructor(private readonly decoratee: IHttpClientProviderRepo) {}

    async provide(url: string, options?: IHttpClientOptions): Promise<IHttpClientResponse> {
        const response: IHttpClientResponse = await this.decoratee.provide(url, options);
        return response;
    }
}
