import { logout } from '../store/ducks/auth';
 
const Logout = () => {
    localStorage.removeItem('token');
    return logout();
}

export default Logout;