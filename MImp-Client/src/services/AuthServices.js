import axios from 'axios';
import { getUserdata, removeUserdata } from '../services/storageServices';
import {jwtDecode} from 'jwt-decode';   
const API = import.meta.env.VITE_API;
             
// const API = 'http://localhost:1111';

const RegisUser = (data) => axios.post(`${API}/user/register`, data);
const LoginUser = (data) => axios.post(`${API}/user/login`, data);

const isAuthenticated = () => {
    return getUserdata() != null ? true : false;
}


const isTokenValid = (token) => {
    try {
        const decoded = jwtDecode(token);
        const currTime = Math.floor(Date.now() / 1000);
        return decoded.exp > currTime; 
    } catch (error) {
        return false;
    }
};

export { RegisUser, LoginUser, isAuthenticated,isTokenValid};
