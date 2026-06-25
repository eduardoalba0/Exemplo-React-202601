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
        errorElement: <Page404/>
    },
    {
        path: "/clientes",
        element: <PageListaClientes/>,
        errorElement: <Page404/>
    },
    {
        path: "/clientes/novo",
        element: <PageCadastroCliente/>,
        errorElement: <Page404/>
    },
    {
        path: "/clientes/:id",
        element: <PageVisualizarCliente/>,
        errorElement: <Page404/>
    },
    {
        path: "/clientes/:id/editar",
        element: <PageCadastroCliente/>,
        errorElement: <Page404/>
    },

]);

export default router;