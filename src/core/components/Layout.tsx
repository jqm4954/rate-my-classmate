import {PropsWithChildren} from "@/core/types";
import {twMerge} from "tailwind-merge";

type props = {
    className?: string,
} & PropsWithChildren

export const Layout = (props: props) => {
    return (
        <div className={twMerge("min-h-screen", props.className)}>
            {props.children}
        </div>
    )
};