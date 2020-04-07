
/*
  本地化存储
*/
export const setStore = (key, content) =>{
    if(!key) return;
    if(typeof content !== 'string'){
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(key, content);
};

/*
  本地化获取
*/
export const getStore = (key)=>{
    if(!key) return;
    return window.localStorage.getItem(key);
};

/*
  本地化删除
*/
export const removeStore = (key)=>{
    if(!key) return;
    return window.localStorage.removeItem(key);
};
