import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "@/core/lib/prisma";

interface Data{
    query: string,
    university: string
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {

        const {
            query,
            university

        }: Data = req.body

        const searchResult = await prisma.profile.findMany({
            where: {
                OR: [{
                    name: {contains: query},
                },
                    {major: {contains: query}},
                ],
                AND: {
                    university: {equals: university},
                },
            }
        });



        if (searchResult !== null) {
            res.status(200).json({Result: searchResult});
        }

        res.status(400);
    }
}