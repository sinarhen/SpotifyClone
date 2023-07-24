import usePlaylistStore from '@/hooks/usePlaylistStore';
import React, {useRef, useCallback, useState, useEffect} from 'react';
import { AiFillBackward, AiFillForward, AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { BsRepeat, BsSkipBackwardFill } from 'react-icons/bs';

interface PlayerControlsProps{
    currentSong: Record<string, any>
}

const PlayerControls: React.FC<PlayerControlsProps> = ({currentSong}) => {
    const audioElem = useRef<any>(); // reference of our audio component
    const progressBar = useRef<any>();
    const animationRef = useRef<any>();

    const [actualDuration, setActualDuration] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [repeatIsClicked, setRepeatIsClicked] = useState(false);
    const {playNextSong, playPreviousSong} = usePlaylistStore();

    useEffect(()=> {
        const seconds = Math.floor(audioElem?.current?.duration)
        setActualDuration(seconds)
        progressBar.current.max = seconds;
    }, [audioElem?.current?.loadedmetadata, audioElem?.current?.readyState])

    const calculateTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const returnedMinutes = minutes < 10? `0${minutes}` : `${minutes}`;
        const secs = Math.floor(seconds % 60);
        const returnedSeconds = secs < 10 ? `0${secs}` : `${secs}`;
        return (returnedMinutes + ':' + returnedSeconds)
    }

    const changeRange = () => {
        audioElem.current.currentTime = progressBar.current.value;
        setCurrentTime(progressBar.current.value)
    }

    const whilePlaying = () => {
        progressBar.current.value = audioElem.current.currentTime;
        setCurrentTime(progressBar.current.value)
        animationRef.current = requestAnimationFrame(whilePlaying);
    }


    const togglePlayPause = useCallback(() => {
      setIsPlaying(!isPlaying)
      if (isPlaying){
        audioElem?.current?.pause()
        cancelAnimationFrame(animationRef.current);
        
      } else{
        audioElem?.current?.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      
    }
    }, [isPlaying])

    const toggleRepeatClick = useCallback(()=>{setRepeatIsClicked(!repeatIsClicked)},[repeatIsClicked])

 return (
        
        <div className='flex flex-col text-white w-1/3 justify-center items-center'>
            <audio
                onEnded={() => {playNextSong(); togglePlayPause()}}
                ref={audioElem}
                src={currentSong.soundUrl}
                className="bg-gray-800 text-white rounded"
            />
            <div className='flex flex-row gap-6 items-center'>

                <BsSkipBackwardFill size={30}/>

                <AiFillBackward onClick={() => playPreviousSong()} className='text-neutral-400 hover:text-white' size={45}/>
                
                <div className='h-20 w-20 flex items-center justify-center'>
                {isPlaying ? <AiFillPauseCircle className='h-16 w-16 hover:h-[68px] hover:w-[68px] focus:h-12px focus:w-12px duration-200' onClick={togglePlayPause}/> : <AiFillPlayCircle onClick={togglePlayPause} className='h-16 w-16 hover:h-[68px] hover:w-[68px] focus:h-12px focus:w-12px duration-200'/>}

                </div>
                
                <AiFillForward onClick={() => {playNextSong()}} className='text-neutral-400 hover:text-white' size={45}/>
                
                <BsRepeat
                    className={repeatIsClicked? 'text-green-400 hover:text-green-500' : 'text-neutral-400 hover:text-white'}
                    size={30}
                    onClick={toggleRepeatClick}
                />
            </div>

            <div className='w-full flex flex-row gap-3 items-center'>
                <p>{calculateTime(currentTime)}</p>
                    <input type="range" value={currentTime} ref={progressBar} onChange={changeRange} className="range transparent h-1.5 w-full appearance-none rounded-lg border-transparent bg-green-600 " />
                <p>{(actualDuration && !isNaN(actualDuration)) && calculateTime(actualDuration)}</p>
            </div>
        </div>
    )
}

export default PlayerControls;