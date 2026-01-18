import type { ReactElement } from "react";
interface Buttonprops {
    variant: "primary" | "secondary"
    size: "sm" | "md" | "lg"
    text: string
    onClick?: () => void;
    startIcon?: ReactElement;
    endIcon?: ReactElement;

}

//global button variable 
const variantStyles = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-300 text-purple-600"
}

const defaultStyles = 'rounded-md flex'

const sizeStyles = {
    sm: "py-1 px-2",
    md: "py-2 px-2",
    lg: "py-2 px-2"
}

export const Button = ( props: Buttonprops) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
       {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null }
        {props.text}
        </button>
}

