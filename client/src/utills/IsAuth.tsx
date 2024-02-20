import { redirect } from "next/navigation";

export default function auth(Component: any) {
    return async function IsAuth(props: any) {
        // let isLogin = await isLoggedin();
        let isLogin = true;
        if (!isLogin) {
            return redirect("/login");
        }

        return <>
            <Component {...props} />
        </>
    };
}