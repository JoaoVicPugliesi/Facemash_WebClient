import { IHttpClientProviderRepo } from "../../../domain/providers/IHttpClientProviderRepo";
import { IMatchCharactersUseCaseRepo } from "../../../domain/repositories/IMatchCharactersUseCaseRepo";
import { IMatchCharactersUseCaseDTO, IMatchCharactersUseCaseResponseDTO } from "./IMatchCharactersUseCaseDTO";

export class IMatchCharactersUseCase {
    constructor(
        private readonly iMatchCharactersUseCaseRepo: IMatchCharactersUseCaseRepo,
        private readonly iHttpClientProviderRepo: IHttpClientProviderRepo
    ) {}

    async execute() {

        const randomIds: IMatchCharactersUseCaseDTO = this.iMatchCharactersUseCaseRepo.assignRandomIds();

        const response = await this.iHttpClientProviderRepo.post('/characters/match', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(randomIds)
        });

        const data: IMatchCharactersUseCaseResponseDTO = response.body as IMatchCharactersUseCaseResponseDTO;
        return data;
    }
}
