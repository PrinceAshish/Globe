import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export default async function   middleware (req:any){
    // const response = await fetch('http://localhost:3000/api/auth');
    // const session = await getSession({req});
    // const userData = await response.json();
    // console.log("first ,",userData);
    let verify = req.cookies.get("userId");
    console.log("11100 , ",verify);
    // let url = req.url
    
    // if(!verify && url.includes('/dashboard')){
    //     return NextResponse.redirect("http://localhost:3000/");
    // }

    // if (verify && url === "http://localhost:3000/") {
    //   return NextResponse.redirect("http://localhost:3000/dashboard");
    // }


}