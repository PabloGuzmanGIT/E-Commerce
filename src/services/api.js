import axios from "axios";
import { store } from "store/store";

export const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

api.interceptors.request.use(
    function(config){
    store.dispatch({
        type: "SET_LOADING",
        payload: true,
    });
    return config;
},
function (error){
    return Promise.reject(error);
}
);

api.interceptors.response.use(
    function (response){
        store.dispatch({
            type: "SET_LOADING",
            payload: false,
        });
        return response;
    },
    function (error){
        return Promise.reject(error);
    }
);