import MenuNavegacao from "./MenuNavegacao.jsx";
import Titulo from "./Titulo.jsx";

function PageTemplate(props) {
    return (
        <>
            <MenuNavegacao/>
            <main className="p-4">
                <Titulo>{props.titulo}</Titulo>
                {props.children}
            </main>
            <footer>

            </footer>
        </>
    )
}

export default PageTemplate;