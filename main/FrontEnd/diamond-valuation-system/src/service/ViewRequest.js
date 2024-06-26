import Http from "../utils/Http";
export const viewCustomerRequest = async (id) => {
    try {
        const res = await Http.httpRequest.get("api/valuation-request/view", {
            params: {
                id
            }
        }) 
                
        return res.data
    } catch (error) {
        console.error('API call error:', error.response ? error.response.data : error.message);
        return {
            errorCode: error.response ? error.response.status : 'NETWORK_ERROR',
            errorMessage: error.response ? error.response.data : error.message
        };
    }
};