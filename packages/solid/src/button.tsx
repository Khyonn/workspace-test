import { JSX } from "solid-js";
import "@khyonn/test-design/dist/css/button.css"

export function Button(props: JSX.ButtonHTMLAttributes<HTMLButtonElement>){
    return <button {...props} class={props.class ? `button ${props.class}` : 'button'}/>
}