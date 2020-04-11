import axios from 'axios'

import {getStore} from './../../config/global';
import {USER_INFO} from "../../store/mutations-type";

export default function ajax(url = '', params = {},type = 'GET') {
    let promise;

    return new Promise((resolve, reject) => {
        let config = {};
        if (getStore(USER_INFO)){
            config = {
                headers: {
                    'TOKEN' : JSON.parse(getStore(USER_INFO)).token,
                }
            }
            if (params instanceof FormData){
                config = {
                    headers: {
                        'TOKEN' : JSON.parse(getStore(USER_INFO)).token,
                        'Content-Type' : 'multipart/form-data; charset=utf-8'
                    },
                    /*transformRequest: [function (data) {
                        return data
                    }]*/
                }
                console.log("config",config);
            }
        }
        if (type.toUpperCase() == 'GET'){
            let paramsStr = '';
            if (params){
                Object.keys(params).forEach(name => {
                    paramsStr += name + "=" + params[name]+"&";
                });
                if (paramsStr){
                    paramsStr.substr(0,paramsStr.lastIndexOf("&"));
                    url += "?"+paramsStr;
                }
            }
            promise = axios.get(url,config);
        } else if (type.toUpperCase() === 'POST'){
            promise = axios.post(url, params,config);
        }
        // 处理结果返回
        promise.then((response)=>{
            resolve(response.data);
        }).catch(error=>{
            reject(error);
        })
    })

    return promise;
}
