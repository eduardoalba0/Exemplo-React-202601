export default function InputTexto(props) {
    return (
        <input
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            className={`border p-2 block w-full ${props.className || ''}`}
            onChange={props.onChange}
        />
    )
}