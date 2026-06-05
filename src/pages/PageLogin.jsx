import PageTemplate from "../components/PageTemplate.jsx";
import Formulario from "../components/Formulario.jsx";
import {useForm} from "react-hook-form";
import InputComLabel from "../components/InputComLabel.jsx";
import Botao from "../components/Botao.jsx";
import loginService from "../services/loginService.js";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import store, {login, logout} from "../store.js";
import {NavLink, useNavigate} from "react-router-dom";

function PageLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register, // Interface de manipulação do input
        handleSubmit, // Manipulador do evento de submissão do Form
        reset, // usamos para definir os valores iniciais dos campos
        formState: { // guarda o estado do form
            errors // erros de validação
        }
    } = useForm()

    useEffect(() => {
        const state = store.getState();
        const usuarioLogado = state.auth.usuarioLogado;

        if (usuarioLogado) {
            dispatch(logout())
        }
    }, [])

    async function handleOnSubmit(form) {
        try {
            const result = await loginService.login(form)
            dispatch(login(result))
            navigate("/")
        } catch (error) {
            if (error.response.status === 403) {
                alert("Usuário e/ou senha inválidos.")
            } else {
                alert("Erro ao realizar login.")
            }
        }
    }

    function onSubmit(form) {
        handleOnSubmit(form)
    }

    return (
        <PageTemplate titulo="Login">
            <Formulario onSubmit={handleSubmit(onSubmit)} className="space-y-4"
            >
                <InputComLabel
                    {...register("username", {
                        required: "O nome de usuário é obrigatório.", // campo obrigatório
                        minLength: {
                            value: 3,
                            message: "O nome de usuário deve ter no mínimo 3 caracteres."
                        },
                        maxLength: {
                            value: 50,
                            message: "O nome de usuário deve ter no máximo 50 caracteres."
                        },
                    })} // copia todas as props de register e manda pro InputTextoComLabel
                    label="Nome de usuário:*" // texto que vai aparecer dentro do label
                    id="username" // identificador do COMPONENTE dentro da página (DEVE SER ÚNICO)
                    placeholder="Insira seu nome de usuário." // texto que vai aparecer dentro do input
                    error={errors.username}
                />
                <InputComLabel
                    {...register("password", {
                        required: "A senha é obrigatória.", // campo obrigatório
                        minLength: {
                            value: 3,
                            message: "A senha deve ter no mínimo 3 caracteres."
                        },
                        maxLength: {
                            value: 50,
                            message: "A senha deve ter no máximo 50 caracteres."
                        },
                    })} // copia todas as props de register e manda pro InputTextoComLabel
                    label="Senha:*" // texto que vai aparecer dentro do label
                    id="password" // identificador do COMPONENTE dentro da página (DEVE SER ÚNICO)
                    placeholder="Insira sua senha." // texto que vai aparecer dentro do input
                    error={errors.password}
                    type="password"
                />

                <div className="space-x-4">
                    <Botao type="submit">Entrar</Botao>
                    <NavLink className="rounded bg-green-600 text-white p-2" to="/clientes/novo">ou cadastre-se
                        aqui</NavLink>
                </div>
            </Formulario>
        </PageTemplate>
    )
}

export default PageLogin;