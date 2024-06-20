import Http from "../utils/Http.js";
export const createPayment = async (customerId, valuationRequestId, createdDate, type) => {
    try {
        const res = await Http.httpRequest.post("api/account/save", {
            customerId,
            valuationRequestId,
            createdDate,
            type,
        });        
        return res.data;
    } catch (error) {
        return {
            errCode: error,
        };
    }
};
