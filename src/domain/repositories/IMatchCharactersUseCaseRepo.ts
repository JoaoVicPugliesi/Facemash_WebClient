import { IMatchCharactersUseCaseDTO } from "../../application/useCases/IMatchCharactersUseCase/IMatchCharactersUseCaseDTO";
import { IGender } from "../entities/Character";

export interface IMatchCharactersUseCaseRepo {
    assignRandomIds(gender: IGender): IMatchCharactersUseCaseDTO;
}
