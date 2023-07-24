import {create } from 'zustand';
import {isEmpty} from 'lodash';

interface PlaylistState{
    playlist: Record<string, any>[],
    addSong: (item: Record<string,any>) => void,
    currentSongItem: Record<string, any>,
    setCurrentSongItem: (songItem: Record<string, any>) => void,
    playNextSong: () => void,
    playPreviousSong: () => void,

}
const isInPlaylistAlready = (playlist: any, songItem: any) => {
    const filter = playlist.filter((playlistSong: any) => songItem.title === playlistSong.title);
    console.log(filter)
    if (!isEmpty(filter)){
        console.log('exists')
        console.log('returnable value: ', filter[0] + '.pk')
        return filter[0].pk
    }
    return false
}
const usePlaylistStore = create<PlaylistState>()((set)=>({
    playlist: [],
    addSong: (item) => set((state) => {
        const isInPlaylistAlready = state.playlist.filter(song => song.title === item.title)    
        if (isEmpty(isInPlaylistAlready)){
            return (
                {
                    playlist: [...state.playlist, {pk: state.playlist.length,...item}]
                }
            );
        }
            return {playlist: [...state.playlist]}
        }
    ),
    currentSongItem: {},
    setCurrentSongItem: (songItem) => set((state) => {
        const alreadyExists = isInPlaylistAlready(state.playlist, songItem);
        console.log(alreadyExists)
        if (alreadyExists === 0 || alreadyExists){
            return {
                currentSongItem: state.playlist[alreadyExists]
            }
        }
        return {
            playlist: [...state.playlist, {pk: state.playlist.length,...songItem}],
            currentSongItem: {pk: state.playlist.length, ...songItem}
        }
    }),
    playNextSong: () => set((state) => {
        if (state.currentSongItem.pk === (state.playlist.length - 1)){
            return {currentSongItem: state.currentSongItem}
        }
        return {
            currentSongItem: state.playlist[state.currentSongItem.pk + 1]
        }
    }),
    playPreviousSong: () => set((state) => {
        if (state.currentSongItem.pk === 0) {
            return {currentSongItem: state.playlist[0]}
        }
        return {
            currentSongItem: state.playlist[state.currentSongItem.pk - 1]
        }
    }),

}));

export default usePlaylistStore;