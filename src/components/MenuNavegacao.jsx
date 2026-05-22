import {Link, NavLink} from "react-router-dom";

function MenuNavegacao(props) {
    return (
        <nav className="flex gap-4 p-4 bg-slate-800 text-white">
            <Link to="/">Início</Link>
            <NavLink to="/tarefas"
                     className={({isActive}) => isActive ? "text-blue-300 font-bold" : "text-white"}>
                Tarefas
            </NavLink>
            <NavLink to="/clientes/"
                     className={({isActive}) => isActive ? "text-blue-300 font-bold" : "text-white"}>
                Clientes
            </NavLink>
        </nav>
    )
}

export default MenuNavegacao;