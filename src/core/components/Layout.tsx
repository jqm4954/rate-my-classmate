import {PropsWithChildren} from "@/core/types";
import {twMerge} from "tailwind-merge";
import styles from "@/styles/topbar.module.css";
import {useUser} from "@/core/hooks";

type props = {
    className?: string,
} & PropsWithChildren

export const Layout = (props: props) => {
    const {logout} = useUser();

    return (
        <div className={"min-h-screen"}>
            <div className={styles.topbar}>
                <span className={styles.title}>Rate My Classmate</span>
                <span className={styles.signout} onClick={logout}>Sign Out</span>
            </div>
            <div className={twMerge(props.className)}>
                {props.children}
            </div>
        </div>
    )
};

