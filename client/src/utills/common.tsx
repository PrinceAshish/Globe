import toast from "./toast"

export const handleResponse = (response: any) => {
    if (!response) {
        return {}
    }
    if (response.success) {
        return response?.data
    } else {

        toast({
            message: response?.error,
            status: 'danger',
            position: 'top',
        })
    }
}