function InputTextoComLabel(props) {
    console.log(props)

    return (
        <div className="w-full md:w-6/12 space-y-2">
            <label htmlFor={props.id}
                   className="block text-sm font-semibold tracking-wide text-blue-700">{props.label}</label>
            <input
                id={props.id}
                name={props.name} // propriedade do register()
                placeholder={props.placeholder}
                ref={props.ref} // propriedade do register()
                onBlur={props.onBlur} // propriedade do register()
                onChange={props.onChange} // propriedade do register()
                className="                    w-full rounded-xl px-4 py-2.5
                    text-slate-800 placeholder:text-slate-400
                    border border-blue-200
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_6px_16px_rgba(37,99,235,0.18)]
                    outline-none
                "/>
            {props.error && <span className="text-red-600">{props.error.message}</span>}
        </div>
    )

}

export default InputTextoComLabel;