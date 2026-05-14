import {Link, NavLink} from "react-router-dom";

function Header(props) {
    return (
        <nav className="flex gap-4 p-4 bg-slate-800 text-white">
            <Link to="/">Início</Link>

            <NavLink
                to="/clientes"
                className={({isActive}) => isActive ? "text-blue-400 font-bold" : "text-white"}
            >
                Clientes
            </NavLink>
        </nav>
    )
}

export default Header;