import React, { FormEvent, useState } from "react";
import { getAuth } from "@firebase/auth";
import { initFirebase } from "@/core/firebase";
import { useUser } from "@/core/hooks";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();
    const { user, logout } = useUser();

    return (
        <div className={"min-h-screen flex justify-center items-center"}>
            <div className={"bg-gray shadow-lg rounded-2xl p-12 w-[32rem]"}>
                <div>
                    <h1 className={"font-bold text-3xl text-brown drop-shadow text-center"}>Rate My Classmate</h1>
                </div>
                <div className={"mt-9"}>
                    <div className={"flex flex-col"}>
                        <label className={"font-semibold text-lg text-brown"}>Email</label>
                        <input type={"email"} className={"bg-eggWhite rounded-lg shadow-md px-3 py-1.5"} />
                    </div>
                    <div className={"flex flex-col mt-3"}>
                        <label className={"font-semibold text-lg text-brown"}>Password</label>
                        <input type={"password"} className={"bg-eggWhite rounded-lg shadow-md px-3 py-1.5"} />
                    </div>
                    <div className={"items-start mt-9 flex flex-col"}>
                        <div className={"flex w-full justify-between"}>
                            <button className={"underline text-brown font-semibold"}>Forgot Password</button>
                            <button className={"underline text-brown font-semibold"}>Sign Up</button>
                        </div>
                        <div className={"w-full mt-1.5"}>
                            <button className={"w-full rounded-lg py-1.5 bg-brown text-lg text-white font-semibold shadow-md"}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}