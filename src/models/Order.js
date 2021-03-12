import api from './ApiConsts.js';
import axios from 'axios';

const model_uri = "orders/"

const list = async (params) => {
    return new Promise(async (resolve, reject) => {
        resolve(axios.get(`${api.uri}${model_uri}`,{params: params}));
    });
}

const create = async (payload) => {
    return new Promise(async (resolve, reject) => {
        resolve(axios.post(`${api.uri}${model_uri}`,payload));
    });
}

export default { 
    list,
    create,
}