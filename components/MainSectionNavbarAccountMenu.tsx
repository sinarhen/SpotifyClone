import { signOut } from "next-auth/react"
import { useState } from "react"
import { AiOutlineArrowRight, AiOutlineUser } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"

const MainSectionNavbarAccountMenu = () => {
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    return (
        <>
            
                <div className="rounded-full w-7 h-7 bg-neutral-800 flex">
                    <AiOutlineUser size={30}/>

                </div>

            <div onClick={() => signOut()} className='bg-neutral-800 rounded-md'>
                <h1 className="text-white">
                    Sign out
                </h1>
            </div>
        </>
)
}
export default MainSectionNavbarAccountMenu;