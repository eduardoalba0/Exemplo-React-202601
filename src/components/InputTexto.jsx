export default function InputTexto(props) {
    return (
        <div>
            <label htmlFor={props.id} className="block mb-1">{props.label}</label>
            <input
                id={props.id}
                ref={props.ref}
                type={props.type}
                name={props.name}
                onBlur={props.onBlur}
                onChange={props.onChange}
                className={`border p-2 block w-full`}
            />
            {props.error ? <span className="text-red-500">{props.error.message}</span> : ''}
        </div>
    )
}