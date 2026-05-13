import {api} from "./api.js";

export const clienteService = {
    listarTodos: async () => {
        const response = await api.get('/clientes');
        return response.data;
    },

    cadastrar: async (cliente) => {
        const response = await api.post('/clientes', cliente);
        return response.data;
    },

    atualizar: async (clienteId, cliente) => {
        const response = await api.put(`/clientes/${clienteId}`, cliente);
        return response.data;
    },

    remover: async (clienteId) => {
        const response = await api.delete(`/clientes/${clienteId}`);
        return response.data;
    }
}