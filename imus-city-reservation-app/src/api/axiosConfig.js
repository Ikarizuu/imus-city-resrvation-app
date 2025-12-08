import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost/imus-city-reservation-app/php-backend/api",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
