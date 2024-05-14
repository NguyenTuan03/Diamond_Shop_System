* Đưa các route ở các trang vào đây 
* Thay vì dùng useNavigate() để nav các đường link '/home/search/id/. Gộp chúng lại thành 1 file
# EXAMPLES
const routes = {
    home: '/',
    nickname: '/:nickname',
    search: '/search',
    upload: '/upload',
    profile: '/profile',
    login: '/login',
    logout: '/logout'
}
export default routes