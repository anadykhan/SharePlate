import { FaLocationDot } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"

const Menu = (props) => {

    const {address, phone, email} = props

    return (
        <div
            className="w-full flex flex-col items-center bg-[#7c8c0f] text-white font-montserrat font-thin lg:text-md p-5 gap-2 lg:gap-3"
        >
            <div
            className="flex flex-col items-center lg:flex-row lg:gap-10"
            >
                <div
                    className="flex items-center gap-2"
                >
                    <div>
                        <FaLocationDot />
                    </div>
                    <div>{address}</div>
                </div>
                <div
                    className="flex items-center gap-2"
                >
                    <div>
                        <IoCall />
                    </div>
                    <div>{phone}</div>
                </div>
                <div
                    className="flex items-center gap-2"
                >
                    <div>
                        <MdEmail />
                    </div>
                    <div>{email}</div>
                </div>
            </div>
            <div
            className="flex items-center gap-5"
            >
                <div>
                    <FaFacebook/>
                </div>
                <div>
                    <FaTwitter />
                </div>
                <div>
                    <RiInstagramFill/>
                </div>
            </div>
        </div>
    )
}
export default Menu