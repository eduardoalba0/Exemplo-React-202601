import {useEffect, useState} from "react";
import clienteService from "../services/clienteService.js";
import Header from "../components/Header.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import BotaoSubmit from "../components/BotaoSubmit.jsx";
import Botao from "../components/Botao.jsx";

function PageListaClientes() {
    const navigate = useNavigate();
    const [clientes, setClientes] = useState([])
    const [carregando, setCarregando] = useState(true)

    async function listarClientes() {
        try {
            const response = await clienteService.listarTodos()
            setClientes(response)
        } catch (erro) {
            console.log(erro)
            alert(erro)
        } finally {
            setCarregando(false)
        }
    }

    async function remover(id) {
        try {
            const response = await clienteService.remover(id)
            alert("Cliente Removido com Sucesso!")
            listarClientes()
        } catch (erro) {
            console.log(erro)
            alert(erro)
        }
    }

    useEffect(() => {
        listarClientes()
    }, []);

    return (
        <>
            <Header/>
            <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-6 flex justify-between items-center">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Lista de Clientes</h1>
                        <Botao onClick={() => navigate("/clientes/novo")}>Novo Cliente</Botao>
                    </div>

                    <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                        {carregando ? (
                            <div className="p-6 text-sm text-slate-600">Carregando clientes...</div>
                        ) : clientes.length === 0 ? (
                            <div className="p-6 text-sm text-slate-600">Nenhum cliente cadastrado.</div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-200">
                                    <thead className="bg-slate-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Nome</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">CPF</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Data
                                            de nascimento
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Opções</th>

                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                    {clientes.map((cliente, index) => (
                                        <tr key={cliente.codigo ?? index} className="hover:bg-slate-50">
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">{cliente.nome}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700">{cliente.cpf}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700">{cliente.dataNascimento ? new Date(cliente.dataNascimento).toLocaleString("pt-br") : '--'}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700">
                                                <NavLink to={`/clientes/${cliente.codigo}/editar`}
                                                         className="text-blue-600 hover:text-blue-900">Editar</NavLink>
                                                <Botao onClick={() => remover(cliente.codigo)}>Remover</Botao>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}


export default PageListaClientes