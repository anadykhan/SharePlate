import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"
import Navbar from "../components/Navbar"

const Root = () => {
    return (
        <div>
            <Menu
                address='KGG, Lamp Street, 345/A Road'
                phone='019312332'
                email='shareplate@gmail.com'
            ></Menu>
            <Navbar
                logoName='SharePlate'
            ></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
export default Root