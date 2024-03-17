import { create } from "zustand";
import { apiCall } from "@/utills/apiCall2";
import toast from "@/utills/toast";
import { handleResponse } from "@/utills/common";
import { createJSONStorage, persist } from "zustand/middleware";
import SecureStorage from "@/utills/SecureStorage";

export const useLandingPage = create(
    persist((set) => ({
        SerachFlightData: [],
        saveSearchFlight: (data: any, callback: any) => {
            set((state: any) => ({ ...state, SerachFlightData: data }));
        },
        IndividualFlight: [],
        saveIndividualFlight: (data: any, callback: any) => {
            set((state: any) => ({ ...state, IndividualFlight: data }));
        },
        // LogoutUser: (data: any, callback: any) => {
        //     apiCall('post', '/logout-user', data).then((response) => {
        //         let responseData = handleResponse(response);
        //         if (responseData) {
        //             if (responseData.status == true) {
        //                 set((state: any) => ({ ...state, isLogin: false }));
        //                 callback?.success();
        //             } else {
        //                 callback?.error();
        //                 // toast({ message: responseData.message });
        //             }
        //         }
        //     });
        // },
        // })
    }), {
        name: "search-flight-details",
        storage: createJSONStorage(() => SecureStorage as any),
    })
)


