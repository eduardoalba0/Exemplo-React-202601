import {useForm} from "react-hook-form";
import Formulario from "../components/Formulario.jsx";
import InputComLabel from "../components/InputComLabel.jsx";
import Botao from "../components/Botao.jsx";
import clienteService from "../services/clienteService.js";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PageTemplate from "../components/PageTemplate.jsx";

function PageCadastroCliente() {
    const [cliente, setCliente] = useState({})
    const {id} = useParams()
    const navigate = useNavigate();

    const {
        register, // Interface de manipulação do input
        handleSubmit, // Manipulador do evento de submissão do Form
        reset, // usamos para definir os valores iniciais dos campos
        formState: { // guarda o estado do form
            errors // erros de validação
        }
    } = useForm()

    async function buscarCliente() {
        try {
            if (id) {
                const response = await clienteService.buscarId(id)
                reset(response) // preenche o formulario
                setCliente(response)
            }
        } catch (e) {
            console.log(e)
            alert("Erro ao buscar cliente.")
        }
    }

    useEffect(() => {
        buscarCliente()
    }, [])


    async function cadastrarCliente(dados) {
        try {
            if (id) {
                let {imagem, ...dadosFormulario} = dados;
                dadosFormulario = {
                    ...cliente,
                    ...dadosFormulario
                }
                await clienteService.atualizar(id, dadosFormulario, imagem)
                alert("Cliente atualizado com sucesso!")
            } else {
                await clienteService.cadastrar(dados)
                alert("Cliente cadastrado com sucesso!")
            }
            navigate("/")
        } catch (error) {
            alert("Erro ao cadastrar Cliente.")
            console.log(error)
        }
    }

    function onSubmit(dados) {
        cadastrarCliente(dados)
    }

    return (
        <PageTemplate titulo={id ? "Editar Cliente" : "Novo Cliente"}>
            <Formulario onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <InputComLabel
                    {...register("nome", {
                        required: "O nome é obrigatório.", // campo obrigatório
                        minLength: {
                            value: 3,
                            message: "O nome deve ter no mínimo 3 caracteres."
                        },
                        maxLength: {
                            value: 50,
                            message: "O nome deve ter no máximo 50 caracteres."
                        },
                    })} // copia todas as props de register e manda pro InputTextoComLabel
                    label="Nome Completo:*" // texto que vai aparecer dentro do label
                    id="nome" // identificador do COMPONENTE dentro da página (DEVE SER ÚNICO)
                    placeholder="Insira seu nome." // texto que vai aparecer dentro do input
                    error={errors.nome}

                />
                <InputComLabel
                    {...register("cpf", {
                        required: "O CPF é obrigatório.", // campo obrigatório
                        minLength: {
                            value: 11,
                            message: "O CPF deve ter 11 caracteres."
                        },
                        maxLength: {
                            value: 11,
                            message: "O CPF deve ter 11 caracteres."
                        },
                    })}
                    label="CPF:*"
                    id="cpf"
                    placeholder="Insira seu CPF."
                />
                <InputComLabel
                    {...register("username", {
                        required: "O nome de usuário é obrigatório.", // campo obrigatório
                    })}
                    label="Nome de usuário:*"
                    type="text"
                    id="username"
                    placeholder="Insira um nome de usuário."
                />
                <InputComLabel
                    {...register("password", {
                        required: "A senha é obrigatória.", // campo obrigatório
                    })}
                    label="Senha:*"
                    type="password"
                    id="password"
                    placeholder="Insira uma senha."
                />
                {id && <InputComLabel
                    {...register("imagem")}
                    label="Foto:"
                    id="imagem"
                    type="file"
                />}
                <Botao type="submit">Cadastrar</Botao>
            </Formulario>
        </PageTemplate>
    )
}

export default PageCadastroCliente;