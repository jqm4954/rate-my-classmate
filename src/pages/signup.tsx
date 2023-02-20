import React, {FormEvent, useState} from "react";
import {useUser} from "@/core/hooks";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/core/firebase";


export default function Signup() {
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const {user, logout} = useUser();

    const isButtonDisabled = () => {
        return name.length === 0 || email.length === 0 || password.length === 0 || confirmationPassword.length === 0;
    }

    const handleSignup = async (e: FormEvent) => {
        if (password !== confirmationPassword)
            return setError("Confirmation password does not equal password.");

        await createUserWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                console.error(error.code, error.message);
                setError(error.message);
            });
    }

    const handleName = (e: FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        setError("");
    }

    const handleEmail = (e: FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        setError("");
    }

    const handlePassword = (e: FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        setError("");
    }

    const handleConfirmationPassword = (e: FormEvent<HTMLInputElement>) => {
        setConfirmationPassword(e.currentTarget.value);
        setError("");
    }

    return (
        <div className={"min-h-screen flex justify-center items-center"}>
            <div className={"bg-gray shadow-lg rounded-2xl p-12 w-[32rem]"}>
                <div>
                    <h1 className={"font-bold text-3xl text-brown drop-shadow text-center"}>Rate My Classmate</h1>
                </div>
                <div className={"mt-9"}>
                    <div className={"space-y-3"}>
                        <div className={"flex flex-col"}>
                            <label className={"font-semibold text-lg text-brown"}>Name</label>
                            <input onInput={handleName} type={"text"}
                                   className={"bg-eggWhite rounded-lg shadow-md px-3 py-1.5"}/>
                        </div>
                        <div className={"flex flex-col"}>
                            <label className={"font-semibold text-lg text-brown"}>Email</label>
                            <input onInput={handleEmail} type={"email"}
                                   className={"bg-eggWhite rounded-lg shadow-md px-3 py-1.5"}/>
                        </div>
                        <div className={"flex flex-col"}>
                            <label className={"font-semibold text-lg text-brown"}>Password</label>
                            <input onInput={handlePassword} type={"password"}
                                   className={"bg-eggWhite rounded-lg shadow-md px-3 py-1.5"}/>
                        </div>
                        <div className={"flex flex-col"}>
                            <label className={"font-semibold text-lg text-brown"}>Confirm Password</label>
                            <input onInput={handleConfirmationPassword} type={"password"}
                                   className={"bg-eggWhite rounded-lg shadow-md px-3 py-1.5"}/>
                        </div>
                    </div>
                    {error.length > 0 && (
                        <div>
                            <p className={"text-red-500"}>{error}</p>
                        </div>
                    )}
                    <div className={"items-start mt-9 flex flex-col"}>
                        <div className={"w-full mt-1.5"}>
                            <button onClick={handleSignup} disabled={isButtonDisabled()}
                                    className={"w-full rounded-lg py-1.5 bg-brown text-lg text-white font-semibold shadow-md disabled:opacity-75"}>
                                Signup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
