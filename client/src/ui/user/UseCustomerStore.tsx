import { create } from "zustand";
import { apiCall } from "@/utills/apiCall2";
import toast from "@/utills/toast";
import { handleResponse } from "@/utills/common";


export const UseCustomerStore = create((set) => ({
    customerDetails: [],
    FindCustomer: (data: any, callback: any) => {
        apiCall('post', '/find-user-email', data).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    callback?.success();
                    set((state: any) => ({ ...state, customerDetails: responseData.data }));
                    // toast({ message: responseData.message, status: "success" });
                } else {
                    callback?.error();
                    toast({ message: responseData.message });
                }
            }
        });
    },
})
);

