import '../css/Link.css';

interface LinkProps {
    readonly url: string,
    readonly name: string
}

export function Link({ url, name }: LinkProps) {
    return (
        <a className='link' href={url}>{name}</a>
    )
}