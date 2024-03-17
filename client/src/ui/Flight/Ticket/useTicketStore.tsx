import { create } from "zustand";
import { apiCall } from "@/utills/apiCall2";
import toast from "@/utills/toast";
import { handleResponse } from "@/utills/common";


export const useTicketStore = create((set) => ({
    saveTicket: (data: any, callback: any) => {
        apiCall('post', '/save-history-flight', data).then((response) => {
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
    tickets: [],
    getTicket: (data: any, callback: any) => {
        apiCall('post', '/get-history-flight', data).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    callback?.success();
                    set((state: any) => ({ ...state, tickets: responseData.data }));
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

