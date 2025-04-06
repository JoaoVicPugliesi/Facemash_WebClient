import { Character } from "../../../domain/entities/Character"

export interface IMatchCharactersUseCaseDTO {
    randomIds: {
        randomId1: number,
        randomId2: number,
    }
}

export interface IMatchCharactersUseCaseResponseDTO {
    characters: Character[]
}