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
    buscarId: async (id) => {
        const response = await api.get(`/clientes/${id}`)
        return response.data
    },
    atualizar: async (id, cliente, imagem = []) => {
        const formData = new FormData()

        if (imagem[0]) {
            formData.append("imagem", imagem[0])
        }
        const clienteBlob = new Blob([JSON.stringify(cliente)],
            {
                type: "application/json",
            })
        formData.append("dados", clienteBlob)

        const response = await api.put(`/clientes/${id}`, formData)
        return response.data
    },

    remover: async (id) => {
        const response = await api.delete(`/clientes/${id}`)
        return response.data
    }
}

export default clienteService;