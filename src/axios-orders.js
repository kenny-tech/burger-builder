import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-fe5e0.firebaseio.com/'
});

export default instance;