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
                switch (router.pathname) {
                    case "/signin":
                        router.push("/profile")
                        break;
                }
            } else {
                removeUserCookie();
                setUser(undefined);
                router.push("/signin");
            }
            setLoading(false);
        })

        return () => {
            cancelAuthListener()
        }
    }, []);

    return {user, logout, loading};
};

export {useUser};