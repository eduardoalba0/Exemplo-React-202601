import Titulo from "./Titulo.jsx";

function Formulario(props) {
    return (
        <form onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}

export default Formulario;