import { IHttpClientProviderRepo } from "../../domain/providers/IHttpClientProviderRepo";
import { IAxiosHttpClientProviderRepoImpl } from "../../infra/providers/IAxiosHttpClientRepoImpl";
import { IHttpClientDecorator } from "../decorators/IHttpClientDecorator";

export class IHttpClientFactory {
    compose(): IHttpClientProviderRepo {
        // const iFecthApiHttpClientProviderRepoImpl = new IFetchApiHttpClientProviderRepoImpl();
        const iAxiosHttpClientProviderRepo = new IAxiosHttpClientProviderRepoImpl();
        const iHttpClientDecorator = new IHttpClientDecorator(iAxiosHttpClientProviderRepo);
        return iHttpClientDecorator;
    }
}
