
import { redirect } from "next/navigation";
export default function auth(Component: any) {
    return async function IsAuth(props: any) {
        // const session = await getServerSession(authOptions);
        // console.log(session); 
        let isLogin = true;
        if (!isLogin) return redirect("/login");

            return <>
                <Component {...props} />
            </>
        };
    }