import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import cookies from "js-cookie";
import {userCookie} from "@/core/types";
import {auth} from "@/core/firebase";

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
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<userCookie>();
    const router = useRouter();

    const logout = async () => {
        await auth.signOut();
        removeUserCookie();
        router.push("/signin");
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
            setLoading(false);
        })

        const userFromCookie = getUserFromCookie()

        // return to Signin page if no User cookie found
        if (!userFromCookie) {
            router.push("/signin");
            return;
        }

        // everything after this point, User exist
        // redirect client out of a page if Signed in
        switch (router.pathname) {
            case "/signin":
                router.push("/profile")
                break;
        }

        setUser(userFromCookie)

        return () => {
            cancelAuthListener()
        }
    }, [])

    return {user, logout, loading};
};

export {useUser};