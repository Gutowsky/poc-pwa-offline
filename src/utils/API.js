import axios from 'axios';

export default axios.create({
    baseURL: 'https://offline.test.online.pg.com/api',
    responseType: 'json',
    headers: {
        "X-Api-Key": "xhv1b7q8fjta2tkq"
    }
});