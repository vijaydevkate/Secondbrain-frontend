interface Buttonprops {
    variant: "primary" | "secondary"
    size: "sm" | "mg" | "lg"
    text: string
    onClick: () => void
    startIcon: any
    endIcon: any

}


export const button = ( props: Buttonprops) => {
    return <button></button>

}

