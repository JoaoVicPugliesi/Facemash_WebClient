import { IHttpClientProviderRepo } from "../../domain/providers/IHttpClientProviderRepo";
// import { IAxiosHttpClientProviderRepoImpl } from "../../infra/providers/IAxiosHttpClientRepoImpl";
import { IFetchApiHttpClientProviderRepoImpl } from "../../infra/providers/IFetchApiHttpClientRepoImpl";
import { IHttpClientDecorator } from "../decorators/IHttpClientDecorator";

export class IHttpClientFactory {
    compose(): IHttpClientProviderRepo {
        const iHttpClientProviderRepo = new IFetchApiHttpClientProviderRepoImpl();
        // const iHttpClientProviderRepo = new IAxiosHttpClientProviderRepoImpl();
        const iHttpClientDecorator = new IHttpClientDecorator(iHttpClientProviderRepo);
        return iHttpClientDecorator;
    }
}
