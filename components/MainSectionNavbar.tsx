import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import MainSectionNavbarAuthButtons from "./MainSectionNavbarAuthButton";
import MainSectionNavbarAccountMenu from "./MainSectionNavbarAccountMenu";

const MainSectionNavbar = () => {
    const {data:user} = useCurrentUser();
    const router = useRouter();
    return (
        <div>
            <div className='flex gap-4 h-full px-10 py-5 items-center justify-between'>
                <div className='flex flex-row gap-4  text-white '>
                    <div className='bg-black p-1 rounded-full cursor-pointer hover:text-gray-400'>
                        
                        <AiOutlineArrowLeft size={23}/>
    
                    </div>
    
                    <div className='bg-black p-1 rounded-full cursor-pointer hover:text-gray-400'>
                        <AiOutlineArrowRight size={23}/>
                    </div>
                
                </div>
                <div className='flex flex-row gap-4 text-white font-bold text-xl right-5 text-white'>
                    {user ?<MainSectionNavbarAccountMenu/>: <MainSectionNavbarAuthButtons /> }
                    
                </div>
            </div>   
        
        </div>
    )
}

export default MainSectionNavbar;