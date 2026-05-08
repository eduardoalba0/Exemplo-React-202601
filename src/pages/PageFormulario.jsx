import Titulo from "../components/Titulo.jsx";
import Formulario from "../components/Formulario.jsx";
import Label from "../components/Label.jsx";
import InputTexto from "../components/InputTexto.jsx";
import {useState} from "react";

function PageFormulario() {
    const [cliente, setCliente] = useState({
        nome: "",
        cpf: ""
    })

    function handleOnChange(event){
        console.log("onChange")
        const {name, value} = event.target;
        setCliente({
            ...cliente, // copia tudo que ja tem no cliente
            [name]: value // modifica apenas o campo "name" de acordo com o input
        })
    }

    function handleOnSubmit(event){
        event.preventDefault()
        alert(`Cliente Cadastrado com NOME = [${cliente.nome}] e CPF = [${cliente.cpf}]`)
    }

    return (
        <div>
            <Titulo>Formulário de Cadastro</Titulo>
            <Formulario onSubmit={handleOnSubmit}>
                <Label>Nome:</Label>
                <InputTexto
                    name="nome"
                    value={cliente.nome}
                    placeholder="Insira seu nome."
                    onChange={handleOnChange}
                />
                <Label>CPF:</Label>
                <InputTexto
                    name="cpf"
                    value={cliente.cpf}
                    placeholder="Insira seu CPF."
                    onChange={handleOnChange}
                />
                <button type="submit">Enviar</button>
            </Formulario>
        </div>
    )

}

export default PageFormulario;