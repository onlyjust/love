<template>
  <div class="wc-session" @click="$emit('switch-session', session.from)">
    <!--<mt-cell
    :title="session.remark || session.from"
    :label="session.lastMessage.duration ? '[语音]': session.lastMessage.content"
    >
      <img v-lazy="'/apis/user/getProfilePhoto/' + session.from" width="44" height="44"/>
    </mt-cell>-->
    <van-cell
            :title="session.remark || session.fromName"
            :label="session.lastMessage.duration ? '[语音]': session.lastMessage.content" >
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #icon>
        <!--<img v-lazy="'https://b.yzcdn.cn/vant/icon-demo-1126.png'" width="44" height="44"/>-->
        <van-image :src="`/api/user/getProfilePhoto/`+ session.from" width="44" height="44" v-if="session.unreadMsgCount==0" />
        <van-icon :name="`/api/user/getProfilePhoto/`+ session.from" size="44" v-else :badge="session.unreadMsgCount > 99 ? '99+' : session.unreadMsgCount"/>
      </template>
    </van-cell>

    <!--<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" width="44" height="44" badge="{{ session.unreadMsgCount > 99 ? '99+' : session.unreadMsgCount}}"/>-->
    <span  class="time">{{ session.lastMessage.timestamp | time }}</span>
    <!--<mt-badge size="small" color="red" v-show="session.unreadMsgCount">-->
      <!--{{ session.unreadMsgCount > 99 ? '99+' : session.unreadMsgCount}}-->
    <!--</mt-badge>-->
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Session',
    props: {
      session: Object,
      active: Boolean
    },
    computed: {
      ...mapGetters({
        friendsInfo: 'friendsInfo'
      }),
      profilePhoto() {
        let info = this.friendsInfo[this.session.from]
        if (info) {
          return info.profilePhoto
        }
        return ''
      }
    }
  }
</script>
<style lang="less">
  .wc-session {
    position: relative;
    height: 60px;
    .mint-cell {
      .mint-cell-value {
        position: absolute;
        left: 10px;
        top: 7px;
        img {
          border-radius: 5px;
        }
      }
      > .mint-cell-wrapper {
        height: 60px !important;
        .mint-cell-title {
          position: absolute;
          left: 65px;
          height: 45px;
          top: 8px;
          width: 100%;
          .mint-cell-text {
            font-size: 16px;
          }
          .mint-cell-label {
            font-size: 14px;
            margin-top: 9px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 80%;
          }
        }
      }
    }
    .time {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 14px;
      color: #888;
    }
    .mint-badge {
      position: absolute;
      top: 2px;
      left: 45px;
    }
  }

</style>
