import { useRouter } from 'next/router';
import React, {useState} from 'react';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import useSongs from '@/hooks/useSongs';
import SongsList from './SongsList';
import MainSectionNavbar from './MainSectionNavbar';


interface MainSectionProps {
    isAuthorized: boolean,
}

const MainSection: React.FC<MainSectionProps> = ({isAuthorized}) => {
    const router = useRouter();
    const {data:songs} = useSongs();

    return (
        <div className="relative h-full bg-zinc-800 flex rounded-md m-2 ml-0">
            <div className='absolute h-24 w-full bg-zinc-900 bg-opacity-90'>
                <MainSectionNavbar />
                <div className='relative px-8 mt-4 font-bold flex flex-col'>
                    <div className='items-center flex text-white flex-row justify-between w-full'>

                        <h2 className='text-4xl hover:underscore cursor-pointer'>Focus</h2>
                        <p className='hover:underscore text-l cursor-pointer'>More</p>

                    </div>
                    <div className='my-10'>
                        <SongsList data={songs}/>
                    </div>
                </div>
            </div>
        </div>

 
    )
}

export default MainSection;