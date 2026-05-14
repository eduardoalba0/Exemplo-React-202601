import {createBrowserRouter} from "react-router-dom";
import {
    Page404,
    PageFormulario,
    PageFormularioHook,
    PageHome,
    PageListaClientes,
    PageListaTarefas
} from "./pages/index.js";


const router = createBrowserRouter([
    {
        path: "/",
        element: <PageHome/>,
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
        path: "clientes",
        element: <PageListaClientes/>,
        errorElement: <Page404/>
    },
    {
        path: "/clientes/novo",
        element: <PageFormularioHook/>
    },
    {
        path: "/clientes/:id/editar",
        element: <PageFormularioHook/>
    }
])

export default router;