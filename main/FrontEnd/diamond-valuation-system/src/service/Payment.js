import Http from "../utils/Http";
export const vnpayPayment = async (amount, orderInfo, orderType) => {
    try {
        const params = new URLSearchParams({ amount, orderInfo, orderType });
        const res = await Http.httpRequest.get(`/api/vnpay/create?${params.toString()}`);
        return res.data;
    } catch (error) {
        console.error('API call error:', error.response ? error.response.data : error.message);
        return {
            errorCode: error.response ? error.response.status : 'NETWORK_ERROR',
            errorMessage: error.response ? error.response.data : error.message
        };
    }
};