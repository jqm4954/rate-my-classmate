import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "@prisma/client";
import {getUniversityList} from "@/core/lib/helpers";

//Data class based on rate_existing message body
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

/**
 * Rate_existing endpoint allows for rating a classmate who already exists in the db given:
 * reviewer email, classmate name, course code, technical ability, effort, sociability, contribution, comments, and
 * overall rating values exist in the request body
 * @param req the api request
 * @param res the api response
 */
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


        const reviewerSchool = await getUniversityList()
            .then((universities) =>
                universities.find((university) =>
                    university.domains.find((domain) => reviewerEmail.includes(domain))
                )
            );

        if (reviewerSchool) {
            // get classmate's data from database
            //TODO ISSUE: if multiple profiles exist with the same name and university this will only select the fiirst
            //possible fix is to pass in the profile id of the classmate that the user is trying to review?
            // const classmateProfile = await prisma.profile.findFirst({
            //     where: {
            //         university: {
            //             equals: reviewerSchool.name,
            //         },
            //         name: {
            //             equals: classmateName
            //         }
            //     }
            // })

            //If classmate isnt in the database yet
            // if (classmateProfile === null) {
            //    res.status(412).json({message: "classmate does not exist yet, please use rate_nonexisting endpoint"});
            // } else {
                const classmate = await prisma.review.create({
                    data: {
                        // profileId: classmateProfile.id,
                        course_code: courseCode,
                        overall: overallRating,
                        technical: technicalAbility,
                        effort: effort,
                        sociability: sociability,
                        contribution: contribution,
                        comment: comments
                    }
                });

                res.status(200);
            }
    //     } else {
    //         res.status(400).json("Issue retrieving user's university from email");
    //     }
    }
}
