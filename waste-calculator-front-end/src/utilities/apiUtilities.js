export const handleResponse = (response) => {
    if (response.status !== 200) {
        return Promise.reject(response.statusText);
    }

    return response.data.data;
};
