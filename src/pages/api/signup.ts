import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { PrismaClient } from '@prisma/client'


interface User {
    username: string
    email: string
    password: string
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, email, password }: User = req.body

        if (!username || !email || !password) {
            res.status(400).json({ message: 'Missing required field' })
            return
        }

        const user: User = {
            username,
            email,
            password
        }

        const prisma = new PrismaClient()

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const authUser = userCredential.user;

                res.status(200).json({user: user})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                res.status(error.code).json({message: error.message})
            });

        res.status(200).json({ message: 'User registered successfully' })
    } else {
        res.status(405).json({ message: 'Method Not Allowed' })
    }
  }

  