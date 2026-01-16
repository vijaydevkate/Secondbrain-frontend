import type { ReactElement } from "react";
interface Buttonprops {
    variant: "primary" | "secondary"
    size?: "sm" | "mg" | "lg"
    text: string
    onClick?: () => void;
    startIcon?: ReactElement;
    endIcon?: ReactElement;

}

//global button variable 
const variantstyles = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-500 text-purple-600"
}

export const Button = ( props: Buttonprops) => {
    return <button className={variantstyles[props.variant]}>{props.text}</button>
}

