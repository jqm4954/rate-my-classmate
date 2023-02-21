import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import getHandler from "@/core/lib/middleware";
import {User} from "@/core/types";

const handler = getHandler();

handler.post((req, res) => {
    const {username, email, password}: User = req.body;

    if (!username || !email || !password)
        return res.status(400).json({message: 'Missing required field'})

    const user: User = {
        username,
        email,
        password
    }

    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return res.status(200).json({user: userCredential.user})
        })
        .catch((error) => {
            console.error(error.code, error.message);
            return res.status(error.code).json({message: error.message})
        });
});

export default handler;