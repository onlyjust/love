import ajax from './ajax'

//GET请求
export const get = (url = '',param={})=>ajax(url,param);
//POST请求
export const post = (url = '',param={})=>ajax(url,param,'POST');

// api地址路径
// export const API_URL = process.env.VUE_APP_API;
// export const BASE_URL = API_URL+ '/api';

export const BASE_URL = '/api';

// 获取我的界面数据
export const getMain = () => ajax(BASE_URL+'/mine/main');
// 获取当前用户基本资料
export const getPersonal = () => ajax(BASE_URL+'/mine/personal');
// 获取所有标签并选中
export const getLabelList = () => ajax(BASE_URL+'/mine/getLabelList');
// 保存交友标签
export const updateDatingLabel = (datingLabelList) => ajax(BASE_URL+'/mine/updateDatingLabel',{datingLabelList},"POST");
// 获取交友基础资料
export const getDatingBasic = () => ajax(BASE_URL+'/mine/getDatingBasic');
// 更新交友基础资料
export const updateDatingBasic = (datingBasic) => ajax(BASE_URL+'/mine/updateDatingBasic', datingBasic, "POST");
// 获取交友走心问题
export const getDatingQuestion = () => ajax(BASE_URL+'/mine/getDatingQuestion');
// 获取交友走心回答
export const getDatingQuestionAnswer = (questionId) => ajax(BASE_URL+'/mine/getDatingQuestionAnswer/'+questionId);
// 更新交友走心回答
export const updateDatingQuestionAnswer = (questionId,answer,fileIdList) => ajax(BASE_URL+'/mine/updateDatingQuestionAnswer',{questionId,answer,fileIdList},"POST");
// 上传文件
export const uploadFile = (fileParam) => ajax(BASE_URL+'/file/upload',fileParam,"POST");
// 删除文件
export const deleteFile = (fileId) => ajax(BASE_URL+'/file/delete/'+fileId);
// 获取生活照
export const getLifePhotoList = () => ajax(BASE_URL+'/mine/getLifePhotoList');
// 获取当前登录人动态信息
export const getPersonalDynamicPage = (pageNum=1,pageSize=20) => ajax(BASE_URL+'/mine/getPersonalDynamicPage',{pageNum,pageSize}, 'POST');
// 发布动态信息
export const pushDynamic = (dynamicParam) => ajax(BASE_URL+'/mine/pushDynamic', dynamicParam, 'POST');
// 动态点赞
export const likeDynamic = (dynamicId,liked) => ajax(BASE_URL+'/mine/likeDynamic',{dynamicId,liked}, 'POST');
// 获取动态列表
export const getDynamicPage = (pageNum=1,pageSize=20) => ajax(BASE_URL+'/dynamic/getDynamicPage',{pageNum,pageSize}, 'POST');
// 根据动态ID获取动态信息
export const getDynamicInfo = (dynamicId) => ajax(BASE_URL+'/dynamic/getDynamicInfo/'+dynamicId);
