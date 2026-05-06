import React from "react";

export default function Botao(props) {
    return (
        <button
            className={`rounded bg-blue-800 text-white shadow-2xl shadow-red-950/50 p-1 ${props.className || ''}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>    )
}