<template>
  <div class="sidebar">
    <mu-paper :zDepth="2" class="user_avator_paper">
      <div class="user_background">
        <img :src="avator" alt="用户头像" class="user_avator_img">
      </div>
      <h3 class="user_username">{{username}}</h3>

    </mu-paper>
    <mu-paper :zDepth="2" style="margin-top: 10px;">
      <mu-menu width="25">
        <mu-menu-item title="个人信息" leftIcon="person" class="side_menu_item" to="user_profile" activeClass="isActive"/>
        <mu-menu-item title="当前项目进度" leftIcon="cached" class="side_menu_item" to="current_project"
                      activeClass="isActive"/>
        <mu-menu-item title="交易成功项目" leftIcon="done" class="side_menu_item" to="success_deal" activeClass="isActive"/>
        <mu-menu-item title="浏览历史" leftIcon="history" class="side_menu_item" to="browse_history"
                      activeClass="isActive"/>
        <mu-menu-item title="消息列表" leftIcon="email" class="side_menu_item" to="message_box" activeClass="isActive"/>
        <mu-menu-item title="我的资产" leftIcon="attach_money" class="side_menu_item" to="my_property" activeClass="isActive"/>
      </mu-menu>
    </mu-paper>
  </div>
</template>
<script>
  import UserAvator from 'assets/defaultUserlogo.png'
  export default {
    data () {
      return {
        avator: UserAvator,
        username: 'zilingspace.com'
      }
    },
    components: {},
    methods: {},
    computed: {}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .sidebar {
    .user_avator_paper {
      height: 290px;

      .user_background {
        background: url("../assets/defaultUserBg.png") center center no-repeat;
        width: 100%;
        height: 110px;
        position: relative;

        .user_avator_img {
          width: 122px;
          height: 122px;
          transform: translatex(-50%);
          position: absolute;
          top: 47px;
          left: 50%;
          border-radius: 50%;
        }
      }
      .user_username {
        font-size: 22px;
        line-height: 30px;
        color: rgb(102, 102, 102);
        margin-top: 80px;
        text-align: center;
      }
    }

    .side_menu {
      margin-top: 10px;
      overflow: hidden;
      .isActive {
        background-color: #9e9e9e;
      }
    }
  }
</style>
