import {useState} from "react";
import Titulo from "../components/Titulo.jsx";
import Botao from "../components/Botao.jsx";
import Formulario from "../components/Formulario.jsx";
import InputTexto from "../components/InputTexto.jsx";
import {useForm} from "react-hook-form";
import InputError from "../components/InputError.jsx";


export default function PageCadastro() {
    const {
        register,
        handleSubmit,
        formState:
            {
                errors
            }
    } = useForm();

    function onSubmit(dados) {
        alert(`Usuario Cadastrado: ${dados.nome}`);
    }

    return (
        <div className="container p-5">
            <Titulo>Cadastro de Cliente</Titulo>
            <Formulario onSubmit={handleSubmit(onSubmit)} className="space-y-1">
                <label>Nome:</label>
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
                />
                {errors.nome && <InputError>{errors.nome.message}</InputError>}
                <Botao type='submit'>Cadastrar</Botao>
            </Formulario>
        </div>
    )
}