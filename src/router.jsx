import {createBrowserRouter} from "react-router-dom";
import {Page404, PageFormulario, PageFormularioHook, PageListaTarefas, PagePrincipal} from "./pages/index.js";

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
        path: "/clientes/novo",
        element: <PageFormularioHook/>
    },
    {
        path: "/clientes/:id/editar",
        element: <PageFormularioHook/>
    }

]);

export default router;