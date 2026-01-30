import axios from 'axios'


// axios intance

const api = axios.create({
    baseURL:'http://localhost:8000'
});

// inceptors

export default api;