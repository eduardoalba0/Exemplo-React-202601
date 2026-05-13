import {useForm} from "react-hook-form";
import Titulo from "../components/Titulo.jsx";
import Formulario from "../components/Formulario.jsx";
import InputTextoComLabel from "../components/InputTextoComLabel.jsx";
import Botao from "../components/Botao.jsx";
import BotaoSubmit from "../components/BotaoSubmit.jsx";
import clienteService from "../services/clienteService.js";

function PageFormularioHook() {
    const {
        register, // Interface de manipulação do input
        handleSubmit, // Manipulador do evento de submissão do Form
        formState: { // guarda o estado do form
            errors // erros de validação
        }
    } = useForm()

    async function cadastrarCliente(dados){
        try{
            await clienteService.cadastrar(dados)
            alert("Cliente cadastrado com sucesso!")
        } catch(error){
            alert("Erro ao cadastrar Cliente.")
            console.log(error)
        }
    }

    function onSubmit(dados) {
        cadastrarCliente(dados)
    }

    return (
        <div>
            <Titulo>Formulário de Cadastro (Com Hook)</Titulo>
            <Formulario onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <InputTextoComLabel
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
                    label="Nome:*" // texto que vai aparecer dentro do label
                    id="nome" // identificador do COMPONENTE dentro da página (DEVE SER ÚNICO)
                    placeholder="Insira seu nome." // texto que vai aparecer dentro do input
                    error = {errors.nome}

                />
                <InputTextoComLabel
                    {...register("cpf")}
                    label="CPF:*"
                    id="cpf"
                    placeholder="Insira seu CPF."
                />
                <BotaoSubmit type="submit">Cadastrar</BotaoSubmit>
            </Formulario>
        </div>
    )
}

export default PageFormularioHook;