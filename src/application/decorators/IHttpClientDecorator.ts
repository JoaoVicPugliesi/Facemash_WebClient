import { IHttpClientOptions, IHttpClientResponse } from "../../domain/entities/HttpClient";
import { IHttpClientProviderRepo } from "../../domain/providers/IHttpClientProviderRepo";

export class IHttpClientDecorator implements IHttpClientProviderRepo {
    constructor(private readonly decoratee: IHttpClientProviderRepo) {}

    async post(url: string, options?: IHttpClientOptions): Promise<IHttpClientResponse> {
        return await this.decoratee.post(url, options);
    }
}
