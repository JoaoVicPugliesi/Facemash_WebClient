import { useEffect, useState } from "react";
import { Duel } from "../components/Duel";
import { Navbar } from "../components/Navbar";
import { Character } from "../domain/entities/Character";
import { iMatchCharactersCompose } from "../application/useCases/IMatchCharactersUseCase/IComposeCharactersUseCase";
import { IMatchCharactersUseCaseResponseDTO } from "../application/useCases/IMatchCharactersUseCase/IMatchCharactersUseCaseDTO";

export function Home() {
    const [random1, setRandom1] = useState<Character>();
    const [random2, setRandom2] = useState<Character>();

    async function match() {
        const data: IMatchCharactersUseCaseResponseDTO | undefined = await iMatchCharactersCompose();
        if (typeof data === 'undefined') console.log('Error');

        setRandom1(data.characters[0]);
        setRandom2(data.characters[1]);
    }

    useEffect(() => {
        match();
    }, [])

    if (!random1 || !random2) {
        return (
            <div>
                <Navbar />
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <Duel random1={random1} random2={random2} />
        </div>
    )
}