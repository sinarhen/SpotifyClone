import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try{   
        if (req.method !== 'GET') {
            return res.status(405).end()
        }
        const songs = await prismadb.song.findMany()
        const randomSong = songs[Math.floor(Math.random()*songs.length)]

        return res.status(200).json(randomSong)

    }catch (error) {
        return res.status(400).end()
    }

}