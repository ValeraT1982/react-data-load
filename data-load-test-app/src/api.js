const API_BASE_ADDRESS = 'http://localhost:4000';

export default class Api {
    static getUsers() {
        const uri = API_BASE_ADDRESS + "/users";

        return fetch(uri, {
            method: 'GET'
        });
    }
}