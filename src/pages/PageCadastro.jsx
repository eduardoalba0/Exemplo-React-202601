import Titulo from "../components/Titulo.jsx";
import Botao from "../components/Botao.jsx";
import Formulario from "../components/Formulario.jsx";
import InputTexto from "../components/InputTexto.jsx";
import {useForm} from "react-hook-form";


export default function PageCadastro() {
    const {
        register,
        handleSubmit,
        formState:
            {
                errors
            }
    } = useForm();

    async function onSubmit(dados) {
        const response = await fetch("http://localhost:8080/clientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados) // Transforma o objeto em texto JSON
        })
        if (response.ok) {
            alert("Cadastrado com sucesso!")
        }

    }

    return (
        <div className="container p-5">
            <Titulo>Cadastro de Cliente</Titulo>
            <Formulario onSubmit={handleSubmit(onSubmit)} className="space-y-1">
                <InputTexto
                    {...register("nome",
                        {
                            required: "Nome é obrigatório.",
                            minLength: {
                                value: 8,
                                message: "O nome deve ter no mínimo 8 caracteres."
                            },
                        }
                    )}
                    id="nome"
                    type="text"
                    label="Nome*"
                    placeholder="Digite seu nome."
                    error={errors.nome}
                />
                <InputTexto
                    {...register("email",
                        {
                            required: "E-mail é obrigatório.",
                            minLength: {
                                value: 8,
                                message: "O e-mail deve ter no mínimo 8 caracteres."
                            },
                        }
                    )}
                    id="email"
                    type="email"
                    label="E-mail*"
                    placeholder="Digite seu e-mail."
                    error={errors.email}
                />
                <Botao type='submit'>Cadastrar</Botao>
            </Formulario>
        </div>
    )
}