import { IGender } from "../../../domain/entities/Character";
import { IHttpClientProviderRepo } from "../../../domain/providers/IHttpClientProviderRepo";
import { IMatchCharactersUseCaseRepo } from "../../../domain/repositories/IMatchCharactersUseCaseRepo";
import { IMatchCharactersUseCaseDTO, IMatchCharactersUseCaseResponseDTO } from "./IMatchCharactersUseCaseDTO";

export class IMatchCharactersUseCase {
    constructor(
        private readonly iMatchCharactersUseCaseRepo: IMatchCharactersUseCaseRepo,
        private readonly iHttpClientProviderRepo: IHttpClientProviderRepo
    ) {}

    async execute(gender: IGender) {

        const randomIds: IMatchCharactersUseCaseDTO = this.iMatchCharactersUseCaseRepo.assignRandomIds(gender);
        const response = await this.iHttpClientProviderRepo.provide('/characters/match', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(randomIds)
        });

        const data: IMatchCharactersUseCaseResponseDTO = response.body as IMatchCharactersUseCaseResponseDTO;
        return data;
    }
}
