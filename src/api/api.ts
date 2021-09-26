import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://ehret-test.herokuapp.com/'
});

export const api = {
    sendMessage(name: string, email: string, message: string) {
        return instance.post(`sendmessage`, { name: name, email: email, message: message });
    }
}