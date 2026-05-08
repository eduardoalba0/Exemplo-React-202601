import Titulo from "./Titulo.jsx";

function Formulario(props) {
    return (
        <form onSubmit={props.onSubmit} className={props.className}>
            {props.children}
        </form>
    )
}

export default Formulario;