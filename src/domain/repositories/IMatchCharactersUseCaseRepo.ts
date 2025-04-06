import { IMatchCharactersUseCaseDTO } from "../../application/useCases/IMatchCharactersUseCase/IMatchCharactersUseCaseDTO";

export interface IMatchCharactersUseCaseRepo {
    assignRandomIds(): IMatchCharactersUseCaseDTO;
}
