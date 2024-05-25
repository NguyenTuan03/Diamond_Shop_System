import httpRequest from './../utils/Http';
export const login = async (token) => {
    try {
        const res = await httpRequest.post(
            'login/google',
            {},
            {
                headers: {
                    'Content-Type': 'application/json',                    
                    Authorization: `Bearer ${token}`,
                },
                // mode: 'no-cors'
            },
        );
        return res;
    } catch (error) {
        return {
            errCode: error  
        }
    }
};