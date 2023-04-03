import axios from 'axios';

const apiUrl = "https://www.googleapis.com/books/v1/"

const http = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-type": "application/json"
    }
})

const configure = () => {
    http.interceptors.request.use(function (config){
            config.params = {
                ...config.params,
                key : "AIzaSyCrt-X8DiVjerHjDPjcVTYTNVblSkEcxwE"
            }
            return Promise.resolve(config)
    }
    )
}

export {
    configure,
    http
}