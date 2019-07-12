import fetch from 'isomorphic-unfetch';

export const json = async (uri, method = 'GET', body = {}) => {

    const headers = {
        'Content-type': 'application/json'
    }

    const config = {
        method,
        headers
    }

    try {
        let result = await fetch(uri, config);
        if (result.ok) {
            return await result.json();
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }

}