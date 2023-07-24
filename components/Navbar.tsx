import React from 'react';
import NavbarItem from './NavbarItem';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';

interface NavbarProps {
    handleHomeClick: () => void,
    handleSearchClick: () => void,
}

const Navbar:React.FC<NavbarProps> = ({handleHomeClick, handleSearchClick}) => {
    return (
        <div className='h-auto flex rounded-md bg-zinc-800 m-2'>
            <div className="px-5 py-5">
                <div className='flex flex-col gap-5 align-center'>
                        <NavbarItem 
                        text='Home'
                        icon=<AiFillHome size={30}/>
                        onClick={handleHomeClick}
                    />
                    <NavbarItem 
                        text='Search'
                        icon=<AiOutlineSearch size={30}/>
                        onClick={handleSearchClick}
                    />
                </div>
            </div>
        </div>
        )

}

export default Navbar;