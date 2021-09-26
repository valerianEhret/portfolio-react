import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    // baseURL: 'https://ehret-test.herokuapp.com/'
    baseURL: 'http://localhost:3010/'
});

export const api = {
    sendMessage(name: string, email: string, message: string) {
        return instance.post(`sendmessage`, { name: name, email: email, message: message });
    }
}