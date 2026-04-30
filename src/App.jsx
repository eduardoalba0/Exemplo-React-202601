import './App.css'
import Botao from "./components/Botao.jsx";

function App() {

    return (
        <div>
            <h1>Olá Mundo!</h1>
            <h1>Este é um exemplo</h1>
            <Botao className="bg-green-300 rounded-2xl text-black p-2">Me clique</Botao>
        </div>
    )
}

export default App
