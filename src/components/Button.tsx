import { FormEventHandler, MouseEventHandler } from "react"
import '../css/Button.css';

interface IButtonProps {
    readonly name: string,
    readonly click?: MouseEventHandler,
    readonly submit?: FormEventHandler
}

export function Button({ name, click, submit }: IButtonProps) {
    return (
        <button className="button" onClick={click} onSubmit={submit}>{ name }</button>
    )
}