import { IHttpClientProviderRepo } from "../../../domain/providers/IHttpClientProviderRepo";
import { IDuelCharactersUseCaseDTO, IDuelCharactersUseCaseResponseDTO } from "./IDuelCharactersUseCaseDTO";

export class IDuelCharactersUseCase {
    constructor(private readonly iHttpClientProviderRepo: IHttpClientProviderRepo){}
    async execute(DTO: IDuelCharactersUseCaseDTO) {
        const response = await this.iHttpClientProviderRepo.provide('/characters/duel', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(DTO)
        })

        const data: IDuelCharactersUseCaseResponseDTO = await response.body as IDuelCharactersUseCaseResponseDTO;
        return data;
    }
}