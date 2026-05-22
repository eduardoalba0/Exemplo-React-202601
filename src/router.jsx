import {createBrowserRouter} from "react-router-dom";
import {
    Page404,
    PageFormulario,
    PageFormularioHook,
    PageListaClientes,
    PageListaTarefas,
    PagePrincipal, PageVisualizarCliente
} from "./pages/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PagePrincipal/>,
        errorElement: <Page404/>
    },
    {
        path: "/tarefas",
        element: <PageListaTarefas/>
    },
    {
        path: "/formulario",
        element: <PageFormulario/>
    },
    {
        path: "/clientes",
        element: <PageListaClientes/>
    },
    {
        path: "/clientes/novo",
        element: <PageFormularioHook/>
    },
    {
        path: "/clientes/:id",
        element: <PageVisualizarCliente/>
    },
    {
        path: "/clientes/:id/editar",
        element: <PageFormularioHook/>
    },

]);

export default router;