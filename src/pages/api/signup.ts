import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import getHandler from "@/core/lib/middleware";
import {User} from "@/core/types";
import {getUniversityList} from "@/core/lib/helpers";
import {sendEmailVerification} from "@firebase/auth";

const auth = getAuth();
const handler = getHandler();

handler.post(async (req, res) => {
    const {email, password}: User = JSON.parse(req.body);

    if (!email || !password)
        return res.status(400).json({message: 'Missing required field'})

    const university = await getUniversityList()
        .then((universities) =>
            universities.find((university) =>
                university.domains.find((domain) => email.includes(domain))
            )
        );

    if (!university)
        return res.status(404).json({message: "Failed to map domain to university."})

    return await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            await sendEmailVerification(userCredential.user);
            return res.status(200).json({user: userCredential.user})
        })
        .catch((error) => {
            console.error(error.code, error.message);
            return res.status(400).json({message: error.message})
        });
});

export default handler;