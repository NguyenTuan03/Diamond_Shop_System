Dùng Restfull Api để kết nối đến backend khi login, logout,...
# Example Login
export const login = async (email, password) => {
    try {
        const res = await HttpRequest.post('auth/login', {
            email,
            password,
        });
        return res;
    } catch (error) {
        return {
            errCode: error.response.status
        }
    }
};