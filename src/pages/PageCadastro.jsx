import {useState} from "react";
import Titulo from "../components/Titulo.jsx";
import Botao from "../components/Botao.jsx";
import Formulario from "../components/Formulario.jsx";
import InputTexto from "../components/InputTexto.jsx";


export default function PageCadastro() {
    const [usuario, setUsuario] = useState({
        nome: '',
        cpf: '',
        email: ''
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setUsuario({
            ...usuario,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Usuario Cadastrado: ${usuario.nome}`)
    }

    return (
        <div className="container p-5">
            <Titulo>Cadastro de Cliente</Titulo>
            <Formulario onSubmit={handleSubmit} className="space-y-1">
                <label>Nome:</label>
                <InputTexto
                    name='nome'
                    value={usuario.nome}
                    placeholder="Digite seu nome:"
                    onChange={handleChange}
                />
                <Botao type='submit'>Cadastrar</Botao>
            </Formulario>
        </div>
    )
}