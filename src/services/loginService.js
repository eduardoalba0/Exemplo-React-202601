import api from './api'

const loginService = {
    login: async (usuario) => {
        const response = await api.post("/auth", usuario)
        return response.data
    },
}

export default loginService;