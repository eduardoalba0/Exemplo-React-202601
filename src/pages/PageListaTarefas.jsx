import Titulo from "../components/Titulo.jsx";
import Tarefa from "../components/Tarefa.jsx";
import React from "react";
import MenuNavegacao from "../components/MenuNavegacao.jsx";
import PageTemplate from "../components/PageTemplate.jsx";

function PageListaTarefas() {
    const [tarefas, setTarefas] = React.useState([])

    React.useEffect(() => {
        async function listarTarefas() {
            const response = await fetch("https://dummyjson.com/todos")
            const data = await response.json();
            setTarefas(data.todos)
        }

        listarTarefas();

    }, [])


    return (
        <PageTemplate titulo="Lista de Tarefas">
            <div>
                {tarefas.map(tarefa => <Tarefa titulo={tarefa.todo} completada={tarefa.completed}/>)}
            </div>
        </PageTemplate>

    )
}

export default PageListaTarefas;