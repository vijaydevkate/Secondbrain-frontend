import type { ReactElement } from "react";
interface Buttonprops {
    variant: "primary" | "secondary"
    size: "sm" | "mg" | "lg"
    text: string
    onClick: () => void;
    startIcon?: ReactElement;
    endIcon?: ReactElement;

}


export const button = ( props: Buttonprops) => {
    return <button></button>

}

