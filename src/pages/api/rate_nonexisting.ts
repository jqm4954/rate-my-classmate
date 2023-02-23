// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "@prisma/client";
import {getUniversityList} from "@/core/lib/helpers";

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
    classmateMajor: string
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
            overallRating,
            classmateMajor
        }: Data = req.body


        const reviewerSchool = await getUniversityList()
            .then((universities) =>
                universities.find((university) =>
                    university.domains.find((domain) => reviewerEmail.includes(domain))
                )
            );

        if (reviewerSchool) {

            //If classmate isnt in the database yet
            //add classmate to database and set result to be the new classmate
            const newClassmate = await prisma.profile.create({
                data: {
                    name: classmateName,
                    university: reviewerSchool.name,
                    major: classmateMajor
                },
            })

            //add the review to the given user
            const res = await prisma.review.create({
                data: {
                    profileId: newClassmate.id,
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
