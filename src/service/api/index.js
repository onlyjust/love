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
// 操作交友标签
export const operationDatingLabel = (labelType,label,selected) => ajax(BASE_URL+'/mine/operationDatingLabel',{labelType,label,selected},"POST");
// 获取交友基础资料
export const getDatingBasic = () => ajax(BASE_URL+'/mine/getDatingBasic');
// 更新交友基础资料
export const updateDatingBasic = (datingBasic) => ajax(BASE_URL+'/mine/updateDatingBasic', datingBasic, "POST");
// 获取交友走心问题
export const getDatingQuestion = (type,recommend=null) => {
    if (recommend == null){
        return ajax(BASE_URL+'/mine/getDatingQuestion/'+type);
    } else {
        return ajax(BASE_URL+'/mine/getDatingQuestion/'+type+"/"+recommend);
    }
};
// 获取交友走心回答
export const getDatingQuestionAnswer = (questionId) => ajax(BASE_URL+'/mine/getDatingQuestionAnswer/'+questionId);
// 获取灵魂问答
export const getSoulQuestionAnswer = () => ajax(BASE_URL+'/mine/getSoulQuestionAnswer');
// 获取TA灵魂问答
export const getTaSoulQuestionAnswer = (datingId) => ajax(BASE_URL+'/mine/getTaSoulQuestionAnswer/'+datingId);
// 更新交友走心回答
export const updateDatingQuestionAnswer = (questionId,answer,fileIdList) => ajax(BASE_URL+'/mine/updateDatingQuestionAnswer',{questionId,answer,fileIdList},"POST");
// 喜欢我的
export const getLikeMe = () => ajax(BASE_URL+'/mine/getLikeMe');
// 我喜欢的
export const getLiked = () => ajax(BASE_URL+'/mine/getLiked');
// 获取申请微信列表
export const getApplyWechat = () => ajax(BASE_URL+'/apply/getApplyWechat');
// 获取接收申请列表
export const getAcceptWechat = () => ajax(BASE_URL+'/apply/getAcceptWechat');
// 审核申请列表
export const auditApply = (applyId,status,reason='') => ajax(BASE_URL+'/apply/auditApply',{applyId, status, reason},"POST");
// 上传文件
export const uploadFile = (fileParam) => ajax(BASE_URL+'/file/upload',fileParam,"POST");
// 删除文件
export const deleteFile = (fileId) => ajax(BASE_URL+'/file/delete/'+fileId);
// 文件转base64
export const getBase64 = (fileUrl) => ajax(BASE_URL+'/file/getBase64',{fileUrl});
// 下载文件
export const getFile = (fileUrl) => ajax(BASE_URL+'/file/getFile',{fileUrl});
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
export const getTaDynamicPage = (datingId,pageNum=1,pageSize=20) => ajax(BASE_URL+'/dynamic/getDynamicPage',{datingId,pageNum,pageSize}, 'POST');
export const getTitleDynamicPage = (title,pageNum=1,pageSize=20) => ajax(BASE_URL+'/dynamic/getDynamicPage',{title,pageNum,pageSize}, 'POST');
// 根据动态ID获取动态信息
export const getDynamicInfo = (dynamicId) => ajax(BASE_URL+'/dynamic/getDynamicInfo/'+dynamicId);
// 获取当天话题
export const getTodayTopic = () => ajax(BASE_URL+'/dynamic/getTodayTopic');

// 评论动态信息
export const commentDynamic = (commentParam) => ajax(BASE_URL+'/mine/commentDynamic', commentParam, 'POST');
// 动态评论点赞
export const likeComment = (commentId,liked) => ajax(BASE_URL+'/mine/likeComment',{commentId,liked}, 'POST');

// 申请加微信
export const applyAddWechat = (applyId) => ajax(BASE_URL+'/mine/applyAddWechat/'+applyId);

// 签到历史信息
export const signInHistory = () => ajax(BASE_URL+'/task/signInHistory');
// 签到
export const signIn = () => ajax(BASE_URL+'/task/signIn');
// 获取签到所有的狗粮
export const getSignInFoodList = () => ajax(BASE_URL+'/task/getSignInFoodList');

// 获取话题列表
export const getTopicList = () => ajax(BASE_URL+'/dynamic/getTopicList');

// 获取微信公众号签名
export const getSignature = (reqUrl) => ajax(BASE_URL+'/weixin/getSignature',{reqUrl});
// 获取高清语音素材
export const uploadWxVoice = (mediaId) => ajax(BASE_URL+'/weixin/uploadVoice',{mediaId});
// 地图选点组件
export const getComponentMap = (backurl) => ajax('https://3gimg.qq.com/lightmap/components/locationPicker2/index.html?search=1&type=0&backurl='+backurl+'&key=FYUBZ-S42CS-X5BOQ-6SUUV-LDADQ-FIBNX&referer=myapp');


// 最新推荐
export const recommend = () => ajax(BASE_URL+'/home/recommend');
// 个人匹配
export const personMatch = () => ajax(BASE_URL+'/home/personMatch');
// 推荐上墙
export const wantRecommend = () => ajax(BASE_URL+'/home/wantRecommend');
// 预览个人信息
export const previewPersonal = (datingId) => ajax(BASE_URL+'/home/previewPersonal/'+datingId);
// 身份证认证
export const idCardAuth = (idCard,realName) => ajax(BASE_URL+'/auth/identity',{idCard,realName}, 'POST');
// 获取认证信息
export const getAuthInfo = () => ajax(BASE_URL+'/auth/getAuthInfo');
// 获取身份认证信息
export const getIdentityInfo = () => ajax(BASE_URL+'/auth/getIdentityInfo');
// 学历认证
export const educationAuth = (fileParam) => ajax(BASE_URL+'/auth/education', fileParam, 'POST');
// 获取学历认证信息
export const getEducationInfo = () => ajax(BASE_URL+'/auth/getEducationInfo');
// 工作认证
export const companyAuth = (fileParam) => ajax(BASE_URL+'/auth/company', fileParam, 'POST');
// 获取工作认证信息
export const getCompanyInfo = () => ajax(BASE_URL+'/auth/getCompanyInfo');
// 游客预览信息
export const preview = (datingId) => ajax(BASE_URL+'/tourist/preview/'+datingId);


// 获取短信验证码(GET)
export const getPhoneCode = (phone) => ajax(BASE_URL + '/login/sendPhoneSms/'+phone);
// 手机验证码登录(POST)
export const phoneCodeLogin = (phone, code) => ajax(BASE_URL + '/login/login', {phone, code}, 'POST');
// 用户名和密码登录(POST)
export const pwdLogin = (userName, userPwd, captcha) => ajax(BASE_URL + '/login/login_pwd', {userName, userPwd, captcha}, 'POST');
// 自动登录
export const getUserInfo = (token)=> ajax(BASE_URL + '/login/getLoginUser/'+token);
// 退出登录
export const getLogOut = ()=> ajax(BASE_URL + '/login/logout');

// 上传头像
export const uploadAvatar = (fileParam) => ajax(BASE_URL+'/user/avatar',fileParam,"POST");
// 上传声音
export const uploadVoice = (fileParam) => ajax(BASE_URL+'/user/uploadVoice',fileParam,"POST");
// 喜欢TA关注TA
export const likeUser = (datingId,liked) => ajax(BASE_URL+'/user/likeUser',{datingId,liked},"POST");


