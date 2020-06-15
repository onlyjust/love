export default {
    // 用户信息
    userInfo: {},
    // token
    token: localStorage.TOKEN || '',

    authIdentity: localStorage.AUTH_IDENTITY || 0,

    currentFrom: localStorage.USER_INFO ? JSON.parse(localStorage.USER_INFO).userId : null,
    sessions: {},
    messages: {},
    unreadMsgCount: 0,
    unreadReqCount: 0,
    contacts: {},
    friendsInfo: {},
    requestContacts: [],
    nearbyPeoples: [],

    username: localStorage.USER_INFO ? JSON.parse(localStorage.USER_INFO).userId : '',
    gender: localStorage.gender || null,
    whatUp: localStorage.whatUp || '',
    realName: localStorage.realName || '',
    phoneNumber: localStorage.phoneNumber || '',
    profilePhoto: localStorage.profilePhoto || '',
    profilePhotoVersion: localStorage.profilePhotoVersion || 0,
    expiredTime: localStorage.expiredTime || 0,

    connected: false,
    active: 'message',
    lostConnect: false,
    unSendMsg: [],
    isAlertTips: false
}
