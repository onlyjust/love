export default {
    // 用户信息
    userInfo: {},
    // token
    token: localStorage.TOKE || '',

    currentFrom: null,
    sessions: {},
    messages: {},
    unreadMsgCount: 0,
    unreadReqCount: 0,
    contacts: {},
    friendsInfo: {},
    requestContacts: [],
    nearbyPeoples: [],

    username: localStorage.username || '',
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
