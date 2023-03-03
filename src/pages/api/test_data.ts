import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "@/core/lib/prisma";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {

        const createData = await prisma.profile.createMany({
            data: [
                {name: 'Joe Brandon', major: 'Software Engineering', university: 'Rochester Institute of Technology'},
                {name: 'Kamala Harris', major: 'Political Science', university: 'Rochester Institute of Technology'},
                {name: 'Student Studentsen', major: 'Business', university: 'Rochester Institute of Technology'},
                {name: 'Bro Obamna', major: 'Computer Science', university: 'Rochester Institute of Technology'},
                {name: 'Timothy Gallwey', major: 'Sports Psychology', university: 'Rochester Institute of Technology'},
            ],
            skipDuplicates: true
        })



        if (createData !== null) {
            res.status(200);
        }

        res.status(400);
    }
}