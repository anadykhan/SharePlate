import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"
import Navbar from "../components/Navbar"

const Root = () => {
    return (
        <div>
            <Navbar
                logoName='SharePlate'
            ></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
export default Root