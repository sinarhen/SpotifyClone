import React from 'react'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import usePlaylistStore from '@/hooks/usePlaylistStore';


interface SongCardProps {
    data: Record<string, any>;
    key: string,
}

const SongCard: React.FC<SongCardProps> = ({data, key}) => {
    const {addSong, playNextSong, setCurrentSongItem} = usePlaylistStore();

    return (
        <div key={key}>   
            <div id='SongCard' className='rounded text-white group w-52 h-64 bg-zinc-900'>
                                <div className='p-4 w-full h-full'>
                                    <div className='flex flex-col items-center'>
                                        <div className='rounded-md object-cover h-150 w-150 object-center'>
                                            <img src={data.thumbnailUrl} alt="" />
                                        </div>
                                        
                                        <div className='w-full'>
                                            <div className='flex flex-row justify-between'>
                                                <div>
                                                    <h1 className='font-bold text-2xl'>{data.title}</h1>
                                                    <p className='text-neutral-700'>{data.author}</p>
                                            
                                                </div>

                                                <div onClick={() => {setCurrentSongItem(data)}} className='w-10 hidden group-hover:flex justify-center items-center h-12 w-12 rounded-full text-green-400 cursor-pointer'>
                                                    <BsFillPlayCircleFill size={60}/>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
        </div>
    )
}

export default SongCard;