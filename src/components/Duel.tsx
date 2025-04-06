import '../css/Duel.css'
import { Character } from '../domain/entities/Character'
import { Card } from './Card'

interface IDuelProps {
    readonly random1: Character,
    readonly random2: Character
}

export function Duel({ random1, random2 }: IDuelProps) {
    return (
        <div className='duel'>
            <Card id={random1.id} name={random1.name} picture={random1.picture} rating={random1.rating}/>
            <h3>Or</h3>
            <Card id={random2.id} name={random2.name} picture={random2.picture} rating={random2.rating}/>
        </div>
    )
}