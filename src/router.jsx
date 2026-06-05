import {createBrowserRouter} from "react-router-dom";
import {
    Page404,
    PageCadastroCliente,
    PageListaClientes,
    PageLogin,
    PagePrincipal,
    PageVisualizarCliente
} from "./pages/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PagePrincipal/>,
        errorElement: <Page404/>
    },
    {
        path: "/login",
        element: <PageLogin/>,
    },
    {
        path: "/clientes",
        element: <PageListaClientes/>
    },
    {
        path: "/clientes/novo",
        element: <PageCadastroCliente/>
    },
    {
        path: "/clientes/:id",
        element: <PageVisualizarCliente/>
    },
    {
        path: "/clientes/:id/editar",
        element: <PageCadastroCliente/>
    },

]);

export default router;