// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "@prisma/client";

type Data = {
    reviewerEmail: string
    classmateName: string
    courseCode: string
    technicalAbility: number
    effort: number
    sociability: number
    contribution: number
    comments: string
    overallRating: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //if classmateName is from the same school
    //add info to database
    if(req.method === "POST") {

        const prisma = new PrismaClient()

        //data from request
        const {
            reviewerEmail,
            classmateName,
            courseCode,
            technicalAbility,
            effort,
            sociability,
            contribution,
            comments,
            overallRating
        }: Data = req.body


        //TODO GET REVIEWER's SCHOOL FROM EMAIL
        const reviewerSchool;
        // reviewerSchool = school_service...

        if (reviewerEmail != null) {
            //regex to get domain from email

            // get classmate's data from database
            const result = await prisma.profile.findMany({
                where: {
                    university: {
                        equals: reviewerSchool,
                    },
                    name: {
                        equals: classmateName
                    }
                }
            })

            //If classmate isnt in the database yet
            if (result === null) {
                //add classmate to database and set result to be the new classmate
                const result = await prisma.profile.create({
                    data: {
                        name: classmateName,
                        university: reviewerSchool
                    },
                })

                //add the review to the given user
                const res = await prisma.review.create({
                    data: {
                        // profile=result.//set to profile from result
                        // profileId
                        course_code: courseCode,
                        overall: overallRating,
                        technical: technicalAbility,
                        effort: effort,
                        sociability: sociability,
                        contribution: contribution,
                        comment: comments
                    }
                })

            }
        }
    }


}
