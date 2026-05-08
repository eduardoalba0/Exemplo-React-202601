function BotaoSubmit(props) {
    return (
        <button type={props.type}
                className="bg-blue-800 rounded p-2 text-white">
            {props.children}
        </button>
    )
}

export default BotaoSubmit;