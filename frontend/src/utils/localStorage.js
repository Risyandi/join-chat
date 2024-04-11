/**
 * risyandi - 2021
 * utils getter and setter local storage
 */

export const storage = {
    get(keyName, data) {
        const result = localStorage.getItem(keyName, data);
        return result;
    },

    set(keyName, data) {
        const result = localStorage.setItem(keyName, data);
        return result;
    },

    remove(keyName, data) {
        const result = localStorage.removeItem(keyName, data);
        return result;
    },

    clearAll(keyName, data) {
        const result = localStorage.clear(keyName, data);
        return result;
    },
}