import type {NextApiRequest, NextApiResponse} from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {query: {domain}} = req;
    if (domain === undefined || domain.length === 0)
        return res.status(400).json({message: "A domain was not provided"})
    const domainList = await fetch(`${process.env.DOMAIN_API}`);
    if (!domainList.ok)
        return res.status(400).json({message: "Domain API returned bad status code"})
    const data: any[] = await domainList.json();
    return res.status(200).json({name: 'John Doe'})
}
