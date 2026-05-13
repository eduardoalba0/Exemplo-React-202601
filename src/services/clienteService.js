import api from './api'

const clienteService = {
    listarTodos: async () => {
        const response = await api.get("/clientes")
        return response.data
    },
    cadastrar: async (cliente) => {
        const response = await api.post("/clientes", cliente)
        return response.data
    }
}

export default clienteService;