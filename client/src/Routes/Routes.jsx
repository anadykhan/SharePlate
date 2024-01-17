import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Root from "../pages/Root";
import AddFood from "../pages/AddFood";
import AvailableFoods from "../pages/AvailableFoods";
import SingleFood from "../pages/SingleFoodDonation";

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
            },
            {
                path: '/availablefoods',
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: '/singlefood',
                element: <SingleFood></SingleFood>
            }
        ]
    },
]);

export default router