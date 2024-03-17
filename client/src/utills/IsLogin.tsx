'use client'

import { UseLoginStore } from '@/ui/guest/Login/UseLoginStore';

export default function IsLogin() {
    const isLogin = UseLoginStore((state:any)=>state.isLogin) 
    return isLogin;
}