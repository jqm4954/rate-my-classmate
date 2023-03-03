import {Layout} from "@/core/components/Layout";
import Image from "next/image";

export const Unauthorized = () => {
    return (
        <Layout className={"flex flex-col justify-center items-center"}>
            <div className={"flex"}>
                <div>
                    <Image src={"lost.svg"} width={300} height={300} alt={""}/>
                </div>
                <div className={"ml-6 flex flex-col justify-center"}>
                    <h1 className={"text-4xl font-bold"}>You seem lost...</h1>
                    <p>This page may not exist, or you are not authorized to access it.</p>
                    <ul className={"ml-12"} style={{listStyle: "circle"}}>
                        <li><a className={"underline"} href={"/signin"}>Sign in</a></li>
                        <li><a className={"underline"} href={"/support"}>Support</a></li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}