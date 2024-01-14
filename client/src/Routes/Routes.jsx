import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Root from "../pages/Root";
import AddFood from "../pages/AddFood";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/donatefood',
                element: <AddFood></AddFood>
            }
        ]
    },
]);

export default router