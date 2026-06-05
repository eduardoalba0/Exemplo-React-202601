import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import Botao from "./Botao.jsx";

function MenuNavegacao(props) {
    const usuarioLogado = useSelector(state => state.auth.usuarioLogado);
    const role = usuarioLogado ? usuarioLogado.role : null

    return (
        <nav className="flex gap-4 p-4 bg-slate-800 text-white items-center justify-between">
            <div>
                <Link to="/">Início</Link>
                {role === "FUNCIONARIO" || role === "ADMIN" &&
                    <NavLink to="/clientes"
                             className={({isActive}) => isActive ? "text-blue-300 font-bold" : "text-white"}>
                        Clientes
                    </NavLink>}
            </div>
            <div>
                <Link to="/login" className="bg-red-600 text-white rounded p-1 justify-self-end">Logout</Link>
            </div>
        </nav>
    )
}

export default MenuNavegacao;