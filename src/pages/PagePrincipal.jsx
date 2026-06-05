import PageTemplate from "../components/PageTemplate.jsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import store from "../store.js";

function PagePrincipal() {
    const navigate = useNavigate();

    useEffect(() => {
        const state = store.getState();
        const usuarioLogado = state.auth.usuarioLogado;
        if (usuarioLogado == null) {
            navigate("/login")
        }
    }, [])

    return (
        <PageTemplate titulo="Página Inicial">
        </PageTemplate>
    )
}

export default PagePrincipal;