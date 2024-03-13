import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import { useApiLoadingStore } from "./useApiLoadingStore";
// import { useAuthStore } from "@/ui/guest/Login/authStore";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
});

// const instanceNextAuth = axios.create({
//     baseURL: process.env.NEXTAUTH_URL,
//     timeout: 10000, // Set your preferred timeout
// });

console.log(process.env.API_URL)

// get Auth token
const getAuthToken = async () => {
    try {

        const state = await getSession();
        console.log(state);
        const user: any = state?.user;
        console.log(user);
        // const state = useAuthStore.getState();
        // const isLoggedIn = state?.isLoggedIn;
        // console.log("access token", user?.access_token);
        if (user) {
            return `Bearer ${user.access_token}`;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

// Common API function
const apiCall = async (method: string, endpoint: string, data = null, headers: any = {}) => {
    console.log('i am in')
    let token = await getAuthToken();
    console.log(token)
    // const { showLoader, hideLoader }: any = useApiLoadingStore.getState();
    const config = {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': token,
            // ...headers
        }
    };
    console.log(endpoint)
    try {
        // if (headers.showLoader) {
        //     showLoader();
        //     headers.showLoader = undefined;
        // }
        // let response = await instance({
        //     method: 'post',
        //     url: endpoint,
        //     data,
        //     ...config,
        // }
        // );
        // const response =  fetch('http://localhost:8080/api/test');
        const response = await instance.post(endpoint, {}, config)
        console.log(response);

        // response = await instance.post(endpoint,data,config);

        // hideLoader();
        // if (headers.responseType === "blob") {
        //     return response;
        // }

        return { success: true, data: 'assiaish' };
    } catch (error: any) {
        let errorMessage = 'An error occurred.';
        if (error?.response) {
            if (error?.response.data && error?.response?.data.message) {
                errorMessage = error?.response?.data?.message;
            } else if (error?.response?.statusText) {
                errorMessage = error?.response?.statusText;
            }
        } else if (error?.message) {
            errorMessage = error?.message;
        }

        // hideLoader();
        console.log(error);
        return { success: false, error: errorMessage }; 
    }
};

export default apiCall;


// if user is unauthenticated logged out them
// if (errorMessage == "Unauthorized") {
//     const authstate: any = useAuthStore.getState();
//     authstate.logout();
// }

// if (headers.nextAuth) {
//     headers.nextAuth = undefined;
//     response = await instanceNextAuth.post(endpoint, data, config);
// } else {
//     headers.nextAuth = undefined;
//     response = await instance.request({
//         method: method, // Change this to your desired HTTP method
//         url: endpoint,
//         data: data,
//         ...config
//     }
//     );
// }