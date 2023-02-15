import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




interface User {
    username: string
    email: string
    password: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method === 'POST') {
        const {email, password}: User = req.body

        if (!email || !password) {
            res.status(400).json({message: 'Missing required field'})
            return
        }


        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                res.status(200).json({user: user})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                res.status(errorCode).json({message: errorMessage})
            });

    }

}

