import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try{
        if (req.method !== 'GET') {
            return res.status(405).end()
        }
        const songs = await prismadb.song.findMany()
        return res.status(200).json(songs)
    } catch (err) {
        console.log(err)
        return res.status(400).end()
    }
}