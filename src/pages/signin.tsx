import React, {FormEvent, useState} from "react";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {useUser} from "@/core/hooks";
import {auth} from "@/core/firebase";
import {ImSpinner9} from "react-icons/im";


export default function Signin() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user, logout} = useUser();
    const [loading, setLoading] = useState(false);

    const handleSignin = (e: FormEvent) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                console.error(error.code, error.message);
                setError(error.message);
            }).then(() => setLoading(false));
    }

    const handleEmail = (e: FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    }

    const handlePassword = (e: FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }

    return (
        <div className={"min-h-screen flex justify-center items-center"}>
            <div className={"bg-gray shadow-lg rounded-2xl p-12 w-[32rem]"}>
                <div>
                    <h1 className={"font-bold text-3xl text-brown drop-shadow text-center"}>Rate My Classmate</h1>
                </div>
                <div className={"mt-9"}>
                    <div className={"flex flex-col"}>
                        <label className={"font-semibold text-lg text-brown"}>Email</label>
                        <input onInput={handleEmail} type={"email"}
                               className={"bg-eggWhite rounded-lg shadow-md px-3 py-1.5"}/>
                    </div>
                    <div className={"flex flex-col mt-3"}>
                        <label className={"font-semibold text-lg text-brown"}>Password</label>
                        <input onInput={handlePassword} type={"password"}
                               className={"bg-eggWhite rounded-lg shadow-md px-3 py-1.5"}/>
                    </div>
                    {error.length > 0 && (
                        <div>
                            <p className={"text-red-500"}>{error}</p>
                        </div>
                    )}
                    <div className={"items-start mt-9 flex flex-col"}>
                        <div className={"flex w-full justify-between"}>
                            {/* <a className={"underline text-brown font-semibold"}>Forgot Password</a> */}
                            <a href={"/signup"} className={"ml-auto underline text-brown font-semibold"}>Sign Up</a>
                        </div>
                        <div className={"w-full mt-1.5"}>
                            <button onClick={handleSignin}
                                    className={"w-full flex items-center justify-center rounded-lg py-1.5 bg-brown text-lg text-white font-semibold shadow-md hover:opacity-80 transition-all duration-100"}>
                                {loading ? <ImSpinner9 color={"red"} className={"animate-spin h-6 w-6 z-40 text-white"}/> : "Sign In"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
