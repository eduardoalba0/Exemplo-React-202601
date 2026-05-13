import Titulo from "../components/Titulo.jsx";
import Tarefa from "../components/Tarefa.jsx";
import React from "react";
import {clienteService} from "../services/clienteService.js";

function PageListaTarefas() {
    const [tarefas, setTarefas] = React.useState([])

    React.useEffect(() => {
        async function listarTarefas(){
            const response = await clienteService.listarTodos();
            console.log(response);
        }
        listarTarefas();

    }, [])


    return (
        <div>
            <Titulo>Minhas Tarefas</Titulo>
            <div>
                {tarefas.map(tarefa => <Tarefa titulo={tarefa.todo} completada={tarefa.completed} />)}
            </div>
        </div>

    )
}

export default PageListaTarefas;