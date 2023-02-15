import {useEffect, useState} from "react";
import {getAuth} from "@firebase/auth";
import {useRouter} from "next/router";
import cookies from "js-cookie";
import {userCookie} from "@/core/types";

const getUserFromCookie = () => {
    const cookie = cookies.get("auth");
    if (!cookie)
        return;
    return JSON.parse(cookie);
}

const setUserCookie = (user: userCookie) => {
    cookies.set("auth", JSON.stringify(user), {
        expires: 1 / 24,
    });
}

const removeUserCookie = () => cookies.remove('auth');

const useUser = () => {
    const [user, setUser] = useState<userCookie>();
    const router = useRouter();
    const auth = getAuth();

    const logout = async () => {
        await auth.signOut();
        removeUserCookie();
        router.push("/auth");
    }

    useEffect(() => {
        const cancelAuthListener = auth.onIdTokenChanged((user) => {
            if (user) {
                const userData = {
                    id: user.uid,
                    email: user.email,
                    refreshToken: user.refreshToken,
                };
                setUserCookie(userData);
                setUser(userData);
            } else {
                removeUserCookie();
                setUser(undefined);
            }
        })

        const userFromCookie = getUserFromCookie()
        if (!userFromCookie) {
            router.push('/')
            return
        }
        setUser(userFromCookie)
        return () => {
            cancelAuthListener()
        }
    }, [])

    return {user, logout}
};

export {useUser};