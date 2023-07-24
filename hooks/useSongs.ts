import fetcher from "@/libs/fetcher";
import useSWR from 'swr';

const useSongs = () => {
    const {data, error, isLoading, mutate} = useSWR('/api/songs', fetcher);
    return {
        data, error, isLoading, mutate
    }

}

export default useSongs;