import {useUser} from "@/core/hooks";
import {Unauthorized} from "@/core/components/Unauthorized";
import {PropsWithChildren} from "@/core/types";

export const ProtectedPage = (props: PropsWithChildren) => {
    const {user, loading} = useUser();

    return (
        loading ? <></> : user ? props.children : <Unauthorized/>
    )
};
