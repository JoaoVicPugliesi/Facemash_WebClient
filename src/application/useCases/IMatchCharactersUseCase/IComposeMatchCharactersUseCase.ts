import { IMatchCharactersUseCaseRepoImpl } from "../../../infra/repositories/IMatchCharactersUseCaseRepoImpl";
import { IHttpClientFactory } from "../../factories/IHttpClientFactory";
import { IMatchCharactersUseCase } from "./IMatchCharactersUseCase";

export async function iComposeMatchCharactersUseCase() {
    const iMatchCharactersUseCaseRepo = new IMatchCharactersUseCaseRepoImpl();
    const iHttpClientFactory = new IHttpClientFactory();
    const iHttpClientRepo = iHttpClientFactory.compose();
    return new IMatchCharactersUseCase(iMatchCharactersUseCaseRepo, iHttpClientRepo);
}