import { MouseEventHandler } from 'react';
import '../css/Card.css';

export interface ICardProps {
    readonly id: number,
    readonly name: string,
    readonly picture: string,
    readonly rating: number,
    readonly click?: MouseEventHandler
}

export function Card({id, name, picture, rating, click}: ICardProps) {
    return (
        <div className='card'>
            <button onClick={click} className='card-btn' data-id={id} data-rating={rating}>
                <img className='card-picture' src={picture} alt={name} />
            </button>
            <div>
                <h3 className='card-name'>{ name }</h3>
                <h3 className='card-rating'>{ rating }</h3>
            </div>
        </div>
    )
}