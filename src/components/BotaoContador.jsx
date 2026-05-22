import React from "react";

export default function BotaoContador(props) {
    const [contador, setContador] = React.useState(0)
    function clickHandler(){
        console.log(contador)
        setContador(contador + 1)
    }
    return (
        <button className={props.className}
        onClick={clickHandler}>
            {props.children + contador}
        </button>
    )
}