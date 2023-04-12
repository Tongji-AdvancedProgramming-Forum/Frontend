import axios from 'axios';
import { useHistory } from 'react-router-dom'

// 请求拦截器，用于添加鉴权信息
axios.interceptors.request.use(async (config) => {
    if (localStorage.getItem('loggedIn')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
});
// 响应拦截器，用于重定向401到登录页面
axios.interceptors.response.use((r) => r, function (error) {
    if (error.response && error.response.status === 401) {
        const history = useHistory();
        history.push('/login');
    }
    return Promise.reject(error)
})