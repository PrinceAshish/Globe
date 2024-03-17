import { create } from "zustand";
import { apiCall } from "@/utills/apiCall2";
import toast from "@/utills/toast";
import { handleResponse } from "@/utills/common";

export const useSearchFlightStore = create((set) => ({
    FlightData: [],
    searchFlight: (data: any, callback: any) => {
        apiCall('post', '/search-flight', data).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    callback?.success();
                    set((state: any) => ({ ...state, FlightData: responseData.data }));
                    toast({ message: responseData.message, status: "success" });
                } else {
                    callback?.error();
                    toast({ message: responseData.message });
                }
            }
        });
    },
})
);

