/**
 * API route for handling getting a list of all profiles and creating a new one
 */
import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";

type Data = {
    name: string
    major: string
    university: string
}
//
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//
//     const prisma = new PrismaClient()
//
//     /**
//      * Post endpoint for /api/classmate
//      *
//      * req body contains name, major, university
//      */
//     if(req.method==="POST"){
//         const {name, major, university}: Data = req.body
//
//         prisma.profile.create({
//             data: {
//                 name: name,
//                 major: major,
//                 university: university
//             }
//         })
//         }
//
//     //gets a list of all profiles from db
//     if(req.method==="GET"){
//         const classmates = await prisma.profile.findMany()
//
//         if(classmates !== null){
//             res.status(200).json({Result: classmates})
//         }
//     }
// }
