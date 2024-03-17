
import { redirect } from "next/navigation";

export default function auth(Component: any) {
    // const { isLogin }: any = UseLoginStore()
    return async function IsAuth(props: any) {
        // const isLogin = await IsLogin()
        let isLogin = true;
        if (!isLogin) {
            return redirect("/login");
        }
        return <>
            <Component {...props} />
        </>
    };
}