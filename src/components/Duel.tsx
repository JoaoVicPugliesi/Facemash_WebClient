import { useEffect, useState } from 'react'
import { IDuelCharactersUseCaseDTO, IDuelCharactersUseCaseResponseDTO } from '../application/useCases/IDuelCharactersUseCase/IDuelCharactersUseCaseDTO'
import '../css/Duel.css'
import { Character, IGender } from '../domain/entities/Character'
import { Card } from './Card'
import { iComposeDuelCharactersUseCase } from '../application/useCases/IDuelCharactersUseCase/IComposeDuelCharactersUseCase'

interface IDuelProps {
    readonly gender: IGender,
    readonly random1: Character,
    readonly random2: Character
}

export function Duel({ gender, random1, random2 }: IDuelProps) {

    const [changer1, setChanger1] = useState<Character>();
    const [changer2, setChanger2] = useState<Character>();
    const [changer1DTO, setChanger1DTO] = useState<IDuelCharactersUseCaseDTO>();
    const [changer2DTO, setChanger2DTO] = useState<IDuelCharactersUseCaseDTO>();

    useEffect(() => {
        setChanger1(random1);
        setChanger2(random2);
    }, [random1, random2]);

    async function duel(DTO: IDuelCharactersUseCaseDTO) {
        const iDuelCharactersUseCase = await iComposeDuelCharactersUseCase();
        const data: IDuelCharactersUseCaseResponseDTO = await iDuelCharactersUseCase.execute(DTO);
        setChanger1(data.match[0]);
        setChanger2(data.match[1]);
    }

    useEffect(() => {
        if (changer1 && changer2) {
            setChanger1DTO({
                gender: gender,
                winner: {
                    id: changer1.id,
                    rating: changer1.rating
                },
                loser: {
                    id: changer2.id,
                    rating: changer2.rating
                }
            });
            setChanger2DTO({
                gender: gender,
                winner: {
                    id: changer2.id,
                    rating: changer2.rating
                },
                loser: {
                    id: changer1.id,
                    rating: changer1.rating
                }
            });
        }
    }, [changer1, changer2, gender]);
    

    if (changer1 && changer2) {
        if (changer1DTO && changer2DTO) {
            return (
                <div data-gender={gender} className='duel'>
                    <Card click={() => duel(changer1DTO)} id={changer1.id} name={changer1.name} picture={changer1.picture} rating={changer1.rating} />
                    <h3>Or</h3>
                    <Card click={() => duel(changer2DTO)} id={changer2.id} name={changer2.name} picture={changer2.picture} rating={changer2.rating} />
                </div>
            )
        }
    }

    return (
        <div>
            <h3>No Duel</h3>
        </div>
    )
}