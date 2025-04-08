import { IHttpClientFactory } from "../../factories/IHttpClientFactory";
import { IDuelCharactersUseCase } from "./IDuelCharactersUseCase";

export async function iComposeDuelCharactersUseCase() {
    const iHttpClientFactory = new IHttpClientFactory();
    const iHttpClientRepo = iHttpClientFactory.compose();
    return new IDuelCharactersUseCase(iHttpClientRepo);
}