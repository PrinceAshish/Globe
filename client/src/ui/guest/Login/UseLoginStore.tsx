import { create } from "zustand";
import { apiCall } from "@/utills/apiCall2";
import toast from "@/utills/toast";
import { handleResponse } from "@/utills/common";


export const UseLoginStore = create((set) => ({
    isLogin: false,
    LoginUser: (data: any, callback: any) => {
        apiCall('post', '/login-user', data).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    callback?.success();
                    set((state: any) => ({ ...state, isLogin: true }));
                    toast({ message: responseData.message, status: "success" });
                } else {
                    callback?.error();
                    toast({ message: responseData.message });
                }
            }
        });
    },
    LogoutUser: (data: any, callback: any) => {
        apiCall('post', '/logout-user', data).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    set((state: any) => ({ ...state, UserExist: responseData.data }));
                    callback?.success();
                } else {
                    callback?.error();
                    // toast({ message: responseData.message });
                }
            }
        });
    },
})
);

