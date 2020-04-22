import axios from 'axios'

import {getStore} from './../../config/global';
import {TOKEN,USER_INFO} from "../../store/mutations-type";

export default function ajax(url = '', params = {},type = 'GET') {
    let promise;

    return new Promise((resolve, reject) => {
        let config = {};
        if (getStore(TOKEN)){
            config = {
                headers: {
                    'TOKEN' : getStore(TOKEN),
                }
            }
            if (params instanceof FormData){
                config = {
                    headers: {
                        'TOKEN' : getStore(TOKEN),
                        'Content-Type' : 'multipart/form-data; charset=utf-8'
                    },
                    /*transformRequest: [function (data) {
                        return data
                    }]*/
                }
                console.log("config",config);
            }
        }
        console.log("config",config);
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
