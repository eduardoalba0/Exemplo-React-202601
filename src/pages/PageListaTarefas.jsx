import Titulo from "../components/Titulo.jsx";
import Tarefa from "../components/Tarefa.jsx";
import React from "react";

function PageListaTarefas() {
    const [tarefas, setTarefas] = React.useState([])

    React.useEffect(() => {
        async function listarTarefas(){
            const response = await fetch("https://dummyjson.com/todos")
            const data = await response.json();
            setTarefas(data.todos)
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