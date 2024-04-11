import {storage} from "./index";
const TOKEN_KEY = 'token-chats';

export const isLogin = (event) => {
    if (storage.get(TOKEN_KEY)) {
        return true;
    }
    return false;
}

export const logout = (event) => {
    storage.remove(TOKEN_KEY);
}

export const getToken = (event) => {
    let token  = storage.get(TOKEN_KEY);
    return token;
}