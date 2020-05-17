import {getStore} from "../../config/global";
import {TOKEN} from "../../store/mutations-type";
import axios from "axios";

export default function httpClient(url = '', params = {},type = 'GET') {
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
        return axios.get(url,config);
    } else if (type.toUpperCase() === 'POST'){
        return axios.post(url, params,config);
    }
}
