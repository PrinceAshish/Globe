
import axios from "axios";
import { useApiLoadingStore } from "./useApiLoadingStore";

export const apiCall = async (method: any, endpoint: any, data = null, headers = {}) => {
    const { showLoader, hideLoader }: any = useApiLoadingStore.getState();
    const instance = axios.create({
        baseURL: 'http://localhost:8000/api',
        timeout: 10000,
    })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': token,
            ...headers
        }
    };
    let UpperCasemethod = method.toUpperCase();
    try {
        showLoader();
        const response = await instance({
            method: UpperCasemethod,
            url: endpoint,
            data,
            headers: config.headers,
        });
        hideLoader();
        return { success: true, data: response.data };
    } catch (error:any) {
        if (error.response && error.response.status === 404) {
            console.log('API Endpoint not found:', endpoint);
            // Handle the 404 error as needed, e.g., redirect or display a message
        }
        hideLoader();
        throw error;
    }
};



