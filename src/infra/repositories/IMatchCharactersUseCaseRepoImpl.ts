import { IMatchCharactersUseCaseDTO } from "../../application/useCases/IMatchCharactersUseCase/IMatchCharactersUseCaseDTO";
import { IMatchCharactersUseCaseRepo } from "../../domain/repositories/IMatchCharactersUseCaseRepo";

export class IMatchCharactersUseCaseRepoImpl implements IMatchCharactersUseCaseRepo {
    assignRandomIds(): IMatchCharactersUseCaseDTO {
        let num1: number = 0;
        let num2: number = 0;
        num1 = Math.floor(Math.random() * 10) + 1;
        do {
            num2 = Math.floor(Math.random() * 10) + 1;
        } while(num1 === num2)
        
        return {
            randomIds: {
                randomId1: num1,
                randomId2: num2
            }
        }
    }
}