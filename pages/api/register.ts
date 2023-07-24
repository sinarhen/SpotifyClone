import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb'
import bcrypt from "bcrypt";
import serverAuth from '@/libs/serverAuth'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try{
        if (req.method !== 'POST') {
            console.log("Method not allowed")
            return res.status(405).end()
        }
        const {email, name, password} = req.body

        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }

        });

        if (existingUser) {
            console.log('User already exists')
            return res.status(400).end()
        }
        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await prismadb.user.create({
                data: {
                    email,
                    name,
                    hashedPassword
            }
        })
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(400).end()
    }
}   