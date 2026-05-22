import PageTemplate from "../components/PageTemplate.jsx";
import React from "react";
import clienteService from "../services/clienteService.js";
import Tabela from "../components/Tabela.jsx";
import {Link} from "react-router-dom";
import Botao from "../components/Botao.jsx";

function PageListaClientes() {
    const [clientes, setClientes] = React.useState([])

    async function listarClientes() {
        try {
            const data = await clienteService.listarTodos()
            setClientes(data)
        } catch (e) {
            console.log(e)
            alert("Erro ao listar clientes.")
        }
    }

    async function removerCliente(cliente) {
        try {
            await clienteService.remover(cliente.codigo)
            alert(`Cliente ${cliente.nome} removido com sucesso`)
            await listarClientes()
        } catch (e) {
            console.log(e)
            alert("Erro ao remover cliente.")
        }
    }

    React.useEffect(() => {
        listarClientes()
    }, [])


    return (
        <PageTemplate titulo="Clientes Cadastrados">
            <Tabela className="">
                <thead>
                <tr>
                    <td>ID</td>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Opções</th>
                </tr>
                </thead>
                <tbody>
                {clientes.map(cliente =>
                    <tr>
                        <td className="px-3">{cliente.codigo}</td>
                        <td className="px-3">{cliente.nome}</td>
                        <td className="px-3">{cliente.cpf}</td>
                        <td className="px-3 space-x-3 space-y-3">
                            <Link to={"/clientes/" + cliente.codigo + "/editar"}>Editar</Link>
                            <Botao onClick={() => removerCliente(cliente)} className="text-red-600">Remover</Botao>
                        </td>
                    </tr>
                )}
                </tbody>
            </Tabela>
        </PageTemplate>
    )
}

export default PageListaClientes;