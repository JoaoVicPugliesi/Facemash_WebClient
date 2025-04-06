import { IMatchCharactersUseCaseRepoImpl } from "../../../infra/repositories/IMatchCharactersUseCaseRepoImpl";
import { IHttpClientFactory } from "../../factories/IHttpClientFactory";
import { IMatchCharactersUseCase } from "./IMatchCharactersUseCase";

export async function iMatchCharactersCompose() {
    const iMatchCharactersUseCaseRepo = new IMatchCharactersUseCaseRepoImpl();
    const iHttpClientFactory = new IHttpClientFactory();
    const iHttpClientRepo = iHttpClientFactory.compose();
    const iMatchCharactersUseCase = new IMatchCharactersUseCase(iMatchCharactersUseCaseRepo, iHttpClientRepo);
    return iMatchCharactersUseCase.execute();
}