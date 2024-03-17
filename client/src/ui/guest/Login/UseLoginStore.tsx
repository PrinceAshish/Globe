import { create } from "zustand";
import { apiCall } from "@/utills/apiCall2";
import toast from "@/utills/toast";
import { handleResponse } from "@/utills/common";
import { createJSONStorage, persist } from "zustand/middleware";
import SecureStorage from "@/utills/SecureStorage";

export const UseLoginStore = create(
    persist((set) => ({
        customerData: [],
        isLogin: false,
        LoginUser: (data: any, callback: any) => {
            apiCall('post', '/login-user', data).then((response) => {
                let responseData = handleResponse(response);
                if (responseData) {
                    if (responseData.status == true) {
                        set((state: any) => ({ ...state, isLogin: true }));
                        set((state: any) => ({ ...state, customerData: responseData.data.user }));
                        toast({ message: responseData.message, status: "success" });
                        callback?.success();
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
                        set((state: any) => ({ ...state, isLogin: false }));
                        callback?.success();
                    } else {
                        callback?.error();
                        // toast({ message: responseData.message });
                    }
                }
            });
        },
        // })
    }), {
        name: "login-details",
        storage: createJSONStorage(() => SecureStorage as any),
    })
)

