import MenuNavegacao from "./MenuNavegacao.jsx";
import Titulo from "./Titulo.jsx";
import {useSelector} from "react-redux";

function PageTemplate(props) {
    const usuarioLogado = useSelector((state) => state.auth.usuarioLogado)
    return (
        <>
            {usuarioLogado != null && <MenuNavegacao/>}
            <main className="p-5">
                <Titulo>{props.titulo}</Titulo>
                {props.children}
            </main>
            <footer>

            </footer>
        </>
    )
}

export default PageTemplate;