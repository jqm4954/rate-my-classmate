// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getAuth, onAuthStateChanged} from "@firebase/auth";
import {PrismaClient} from "@prisma/client";

type Data = {
    classmateName: string
    technicalAbility: number
    effort: number
    sociability: number
    contribution: number
    comments: string
    overallRating: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    //check that user is authenticated
    //if authenticated
    //if classmateName is from the same school
    //add info to database

    const prisma = new PrismaClient()

    //data from request
    const {classmateName, technicalAbility, effort, sociability, contribution, comments, overallRating}: Data = req.body


    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        //if authenticated
        if (user) {
            const reviewerEmail = user.email
            //TODO GET REVIEWER's SCHOOL FROM EMAIL

            if(reviewerEmail != null) {
                //regex to get domain from email
                let regex = "(?<=@)[^.]+(?=\.)"
                let emailDomain: string = reviewerEmail.match(regex)
                if (emailDomain != null) {
                    emailDomain = emailDomain.toString()
                    // get classmate's data from database
                    const result = await prisma.profile.findMany({
                        where: {
                            email: {
                                endsWith: emailDomain,
                            },
                            name: {
                                equals: classmateName
                            }
                        }
                    })

                    //If classmate isnt in the database yet
                    if(result === null){
                        //add classmat to database

                    }
                }
            }

        } else {
            //unauthenticated
            res.status(401).json({message: "Unauthenticated user"})
        }
    });
}
