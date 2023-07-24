import React from 'react';
import {isEmpty } from 'lodash';
import SongCard from './SongCard';
interface SongsListProps {
    data: Record<string, any>[],
};

const SongsList: React.FC<SongsListProps> = ({data}) => {
    if (isEmpty(data)) {
        return null;
    }
    return (

        <div className='flex flex-row gap-8 overflow-hidden'>
            {data.map((song) => (
                <SongCard key={song.id} data={song} />
            ))}
        </div>
        

    )
}

export default SongsList;