import {useUser} from "@/core/hooks";

export default function Home() {
    const {user, logout} = useUser();

    return (
        <div className={"min-h-screen flex flex-col justify-center items-center"}>
            <p>Hello, {user?.email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}