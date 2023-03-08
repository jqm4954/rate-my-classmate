import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "@/core/lib/prisma";

interface Data{
    name: string,
    university: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method === "GET"){
        
        const {
            name,
            university
        }: Data = req.body

        const result = await prisma.profile.findMany({
            where: {
                name: name,
                AND: {
                    university: {equals: university}
                }
            }
        });

        if (result !== null) {
            res.status(200).json({Result: result});
        }

        res.status(400);
    }
}