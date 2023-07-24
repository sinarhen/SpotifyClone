import { useRouter } from "next/router"


const MainSectionNavbarAuthButtons = () => {
    const router = useRouter();
    return (
        <>
            <div id='button1' onClick={() => router.push('/auth')} className='bg-opacity-100 px-8 py-2 rounded-full cursor-pointer'>

                <p className='hover:scale-105'>Register</p>
            </div>
        <div id='button2' onClick={() => router.push('/auth')} className='px-8 py-2 bg-white text-black rounded-full cursor-pointer'>
            <p className='hover:scale-105'>Login</p>
        </div>
    </>
    )
}

export default MainSectionNavbarAuthButtons;