import { createBrowserRouter } from "react-router-dom";
import App from "../../App.tsx";
import Home from "../../pages/home/Home.tsx"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default router;