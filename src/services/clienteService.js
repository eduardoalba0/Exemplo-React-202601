import api from './api'

const clienteService = {
    listarTodos: async () => {
        const response = await api.get("/clientes")
        return response.data
    },
    cadastrar: async (cliente) => {
        const response = await api.post("/clientes", cliente)
        return response.data
    },
    buscar: async (id) => {
        const response = await api.get(`/clientes/${id}`)
        return response.data
    },
    editar: async (id, cliente) => {
        const response = await api.put(`/clientes/${id}`, cliente)
        return response.data
    },
    remover: async (id) => {
        const response = await api.delete(`/clientes/${id}`)
        return response.data
    }


}

export default clienteService;