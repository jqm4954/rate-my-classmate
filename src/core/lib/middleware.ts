import nc from "next-connect";
import {NextApiRequest, NextApiResponse} from "next";

const getHandler = () => {
    return nc<NextApiRequest, NextApiResponse>({
        onError: (err, req, res, next) => {
            console.error(err.stack);
            return res.status(500).end("Something broke, ask an admin!");
        },
        onNoMatch: (req, res) => {
            return res.status(404).end("Page is not found!");
        },
    });
}

export default getHandler;