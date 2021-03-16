const data = {};

export const storage = {
    add(key, value) {
        data[key] = value;
    },
    get(key) {
        return data[key];
    },
};
