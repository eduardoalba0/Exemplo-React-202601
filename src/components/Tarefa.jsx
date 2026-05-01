function Tarefa(props){
    return (
        <div
            className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            {props.titulo}
            <div className="font-semibold text-indigo-600">
                {props.completada ? "Completada" : "Pendente"}
            </div>
        </div>
    )
}

export default Tarefa;