import ajax from './ajax'

//GET请求
export const get = (url = '',param={})=>ajax(url,param);
//POST请求
export const post = (url = '',param={})=>ajax(url,param,'POST');


export const getMovieOnInfoList = (cityId) => ajax('/api/movieOnInfoList',{cityId});

export const BASE_URL = '/api';

// 获取我的界面数据
export const getMain = () => ajax(BASE_URL+'/mine/main');
// 获取当前用户基本资料
export const getPersonal = () => ajax(BASE_URL+'/mine/personal');
// 获取所有标签并选中
export const getLabelList = () => ajax(BASE_URL+'/mine/getLabelList');
// 保存交友标签
export const updateDatingLabel = (datingLabelList) => ajax(BASE_URL+'/mine/updateDatingLabel',{datingLabelList},"POST");
