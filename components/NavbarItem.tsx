import React from 'react';
import { IconType } from "react-icons";
import { FaGoogle } from 'react-icons/fa';
import {useState} from 'react';
import {AiOutlineHome, AiFillHome} from 'react-icons/ai';

interface NavbarItemProps {
    text: string,
    onClick: () => void,
    icon: React.ReactNode
}

const NavbarItem:React.FC<NavbarItemProps> = ({text, onClick, icon}) => {
    return ( 
        <div className='bg-opacity-100 h-8 w-full'>   
            <div onClick={onClick} className='hover:text-green-400 transition text-white flex flex-row cursor-pointer align-center gap-4 focus:text-bold'>
                <span>{icon}</span>
                <p className='font-semibold text-xl'>{text}</p>
            </div>
        </div>
    )
}

export default NavbarItem;