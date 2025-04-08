import { useEffect, useState } from "react";
import { Duel } from "../components/Duel";
import { Navbar } from "../components/Navbar";
import { Character, IGender } from "../domain/entities/Character";
import { iComposeMatchCharactersUseCase } from "../application/useCases/IMatchCharactersUseCase/IComposeMatchCharactersUseCase";
import { IMatchCharactersUseCaseResponseDTO } from "../application/useCases/IMatchCharactersUseCase/IMatchCharactersUseCaseDTO";
import { Navlinks } from "../components/Navlinks";
import '../css/pages/Home.css'
import { Button } from "../components/Button";
import { IMatchCharactersUseCase } from "../application/useCases/IMatchCharactersUseCase/IMatchCharactersUseCase";

export function Home() {
    const [random1, setRandom1] = useState<Character>();
    const [random2, setRandom2] = useState<Character>();
    const [gender, setGender ] = useState<IGender>('female');

    async function match(gender: IGender) {
        setGender(gender);
        const iMatchCharactersUseCase: IMatchCharactersUseCase = await iComposeMatchCharactersUseCase();
        const data: IMatchCharactersUseCaseResponseDTO | undefined = await iMatchCharactersUseCase.execute(gender);
        if (typeof data === 'undefined') console.log('error');
        setRandom1(data.characters[0]);
        setRandom2(data.characters[1]);
    }

    useEffect(() => {
        match('female');
    }, [])

    if (!random1 || !random2) {
        return (
            <div className="home">
                <Navbar />
                <p>Loading...</p>
                <Navlinks/>
            </div>
        );
    }

    return (
        <div className="home">
            <Navbar />
            <div className="home-paragraphs">
                <p>Were we let in for our looks? No. Will we be judged on them? Yes.</p>
                <h3>Who you choose for a date? Click to Choose</h3>
            </div>
            <div className="home-gender">
                <Button click={() => match('female')} name="Women"></Button>
                <Button click={() => match('male')} name="Men"></Button>
            </div>
            <Duel gender={gender} random1={random1} random2={random2} />
            <Navlinks/>
        </div>
    )
}