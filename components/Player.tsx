import React, {useCallback, useEffect, useState, useRef, use} from 'react';
import usePlaylistStore from '@/hooks/usePlaylistStore';
import ReactAudioPlayer from 'react-audio-player';
import { AiFillBackward, AiFillForward, AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { BsRepeat, BsSkipBackwardFill, BsSkipForwardFill } from 'react-icons/bs';
import { FaPause, FaPlay } from 'react-icons/fa';
import PlayerControls from './PlayerContols';
import {isEmpty} from 'lodash';

const Player = () => {
    const {playlist, currentSongItem, playNextSong, playPreviousSong} = usePlaylistStore();

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
      if (!isEmpty(currentSongItem)){
        setIsOpen(true)
      }
    }, [currentSongItem])

    console.log(playlist)

    useEffect(() => {
      if (!isEmpty(currentSongItem)){
        setIsOpen(true)
      }
    }, [currentSongItem])

    if (!isOpen){
      return null;
    }


    
    return (
    <div id="player" className="fixed bg-black h-48 z-20 bottom-0  w-full h-16">
        <div className="flex flex-row h-full px-5 py-5 justify-between items-center">
            <div className="flex flex-row w-1/3">
              <div className='w-32 h-32 rounded-md border'>
                <img src={currentSongItem.thumbnailUrl} alt="photo" />
              </div>
              <div className='flex flex-col ml-2'>
                <h1 className='text-white text-4xl '>{currentSongItem.author}</h1>
                <h2 className='text-neutral-400 text-3xl'>{currentSongItem.title}</h2>
                <p className='text-neutral-700 text-l'>{currentSongItem.duration}</p>
              </div>
            </div>

            {/* Audio Player */}
            <PlayerControls currentSong={currentSongItem}/>
            {/* End of audio Player */}
            <div className='w-1/3 flex justify-end'>

              <div className="w-10 h-10 rounded-full bg-white">


              </div>
            </div>

        </div>
      </div>
    );
}

export default Player;