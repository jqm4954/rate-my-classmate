import React, {FormEvent, useState} from "react";
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "@firebase/auth";
import {initFirebase} from "@/core/firebase";
import {useUser} from "@/core/hooks";

initFirebase();

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();
    const {user, logout} = useUser();

    const handleSubmit = (e: FormEvent) => {

    }

    const handleEmail = (e: FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    }

    const handlePassword = (e: FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }


    return (
        <div className={"flex"}>
            <div className={"mx-auto flex flex-col items-center"}>
                {!user && (
                    <>
                        <input value={email} onInput={handleEmail} className={"border-2 border-indigo-500"}
                               type={"email"}
                               placeholder={"email"}/>
                        <input value={password} onInput={handlePassword} className={"border-2 border-indigo-500"}
                               type={"password"} placeholder={"password"}/>
                        <button onClick={handleLogin} className={"mt-3"}>Sign In</button>
                        <div className={"mt-12 font-bold"}>
                            <p>Not Signed In</p>
                        </div>
                    </>
                )}
                {user && (
                    <>
                        <div className={"mt-12 font-bold"}>
                            <p>Email: {user.email}</p>
                            <p>Signed In</p>
                            <button onClick={handleLogout} className={"mt-3"}>Sign Out</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
