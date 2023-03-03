/**
 * API route for handling getting a list of all profiles and creating a new one
 */
import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "@/core/lib/prisma";

type Data = {
    name: string
    major: string
    university: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    /**
     * Post endpoint for /api/classmate
     *
     * req body contains name, major, university
     */
    if (req.method === "POST") {
        const {name, major, university}: Data = req.body

        await prisma?.profile.create({
            data: {
                name,
                major,
                university
            }
        })
    }
    //not sure where to put this 
    // const createData = await prisma.user.createMany({
    //     data: [
    //         {name: 'Joe Brandon', email: 'jb46@rit.edu', university: 'Rochester Institute of Technology'},
    //         {name: 'Kamala Harris', email: 'kh46@rit.edu', university: 'Rochester Institute of Technology'},
    //         {name: 'Student Studentsen', email: 'ss69@rit.edu', university: 'Rochester Institute of Technology'},
    //         {name: 'Bro Obamna', email: 'bo56@rit.edu', university: 'Rochester Institute of Technology'},
    //         {name: 'Timothy Gallwey', email: 'tg77@rit.edu', university: 'Rochester Institute of Technology'},
    //     ],
    //     skipDuplicates: true
    // })
    //gets a list of all profiles from db
    if (req.method === "GET") {
        const classmates = await prisma?.profile.findMany()

        if (classmates !== null) {
            res.status(200).json({Result: classmates})
        }

        res.status(400);
    }
}
