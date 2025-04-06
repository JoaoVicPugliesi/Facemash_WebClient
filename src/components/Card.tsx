import '../css/Card.css';

export interface ICardProps {
    readonly id: number,
    readonly name: string,
    readonly picture: string,
    readonly rating: number
}

export function Card({id, name, picture, rating}: ICardProps) {
    return (
        <div>
            <button className='card' data-id={id} data-rating={rating}>
                <img className='card-image' src={picture} alt={name} />
            </button>
        </div>
    )
}