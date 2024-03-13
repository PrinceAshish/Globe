import { create } from "zustand";
import { apiCall } from "@/utills/apiCall2";
import toast from "@/utills/toast";
import { handleResponse } from "@/utills/common";


export const useRegistrationStore = create((set) => ({
    saveUser: (data: any, callback: any) => {
        apiCall('post', '/save-user', data).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    callback?.success();
                    toast({ message: responseData.message, status: "success" });
                } else {
                    callback?.error();
                    toast({ message: responseData.message });
                }
            }
        });
    },
    UserExist: false,
    checkUserExist: (data: any, callback: any) => {
        apiCall('post', '/find-user-email', data).then((response) => {
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
    checkUserExist2: (data: any, callback: any) => {
        apiCall('post', '/find-user-mobile', data).then((response) => {
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

