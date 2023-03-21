import axios from 'axios';

const http = axios.create({
    baseURL: 'https://quizapi.io/api/v1/questions/?apiKey=etxbFIdw2uQFuvmQNL29U41HUqpj1ImlDIi9YVyY&limit=10',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: false
});

export default http;
