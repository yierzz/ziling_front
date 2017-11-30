<template>
  <div>
    <mu-appbar style="background-color: #fff;height:80px; box-shadow: none; width: 1200px; margin: 0 auto">
      <a @click="toIndex" slot="left" style="width: 100px;height: 100%; cursor: pointer; margin-right: 116px;">
        <img :src="LOGO_NOBACK" slot="left" style="width: 100%">
      </a>
      <div class="desktop" slot="left" style="display: flex; align-items: center;">
        <mu-flat-button slot="left" color="black" label="首页" to="/index" style="height: 30px;border-radius: 18px"
                        activeClass="pathActive" :color="currentPath === '/index' ? '#fff': '#000' "/>
        <mu-flat-button slot="left" color="black" label="聘请紫领" to="/recruit" style="height: 30px;border-radius: 18px"
                        activeClass="pathActive" :color="currentPath === '/recruit' ? '#fff': '#000' "/>
        <mu-flat-button slot="left" color="black" label="任务列表" to="/projects" style="height: 30px;border-radius: 18px"
                        activeClass="pathActive" :color="currentPath === '/projects' ? '#fff': '#000' "/>
        <mu-flat-button slot="left" color="black" label="帮助" to="/help" :rippleOpacity="0"
                        style="height: 30px;border-radius: 18px" activeClass="pathActive"
                        :color="currentPath === '/help' ? '#fff': '#000' "/>
      </div>
      <div class="desktop" slot="right">

        <div v-if="loginTag" slot="right" style="height: 100%">

          <mu-flat-button color="grey" label="钱包" icon="attach_money" to="/personal"/>
          <mu-flat-button v-if="loginTag" slot="right" color="grey" label="未读信息" ref="msgButton"
                          icon="remove_red_eye" @hover="toggle('msgOpen')" to="/personal/message"/>
          <mu-flat-button v-if="loginTag" slot="right" color="grey" label="其他" to="/other"/>

          <mu-flat-button v-if="loginTag" slot="right" ref="userButton" @hover="toggle('userOpen')" to="/personal">
            <mu-avatar :src="userAvatorImg"/>
          </mu-flat-button>
        </div>


        <div v-else slot="right" style="height: 100%; display: flex; align-items: center">
          <mu-raised-button label="注 册" primary slot="right" @click="openDialog('signup')"
                            style="height: 30px;margin-right: 12px; border-radius: 18px"/>
          <mu-raised-button label="登 录" slot="right" @click=" openDialog('login')"
                            style="height: 30px;border-radius: 18px"/>
        </div>
      </div>
      <div class="mobile_device" slot="left">
        <span>紫领网</span>
      </div>
      <div class="mobile_device" slot="right">
        <mu-icon-button icon="menu" touch @click.native="drawer = true"/>
      </div>


    </mu-appbar>

    <mu-popover :trigger="msgTrigger" :open="msgOpen" @close="handleClose" :anchorOrigin="anchorOrigin"
                :targetOrigin="targetOrigin" v-if="loginTag">
      <mu-menu>
        <mu-menu-item title="未读消息">
          <mu-badge content="0" slot="after"/>
        </mu-menu-item>

      </mu-menu>
    </mu-popover>
    <mu-popover :trigger="userTrigger" :open="userOpen" :anchorOrigin="anchorOrigin"
                :targetOrigin="targetOrigin" @close="handleClose" v-if="loginTag">
      <mu-paper class="popop_user_profile" style="padding: 0 20px 0px 20px">
        <h3 style="text-align: center">{{userInfo.cellphone }}</h3>
        <mu-badge content="空闲中" primary>
        </mu-badge>
        <mu-list>
          <mu-list-item title="信用">
            <mu-icon slot="left" value="credit_card"></mu-icon>
            <mu-linear-progress mode="determinate" :value="8" color="blue"/>
            <span slot="right">0.8/10</span>
          </mu-list-item>
          <mu-list-item title="能力">
            <mu-icon slot="left" value="attach_money"></mu-icon>
            <mu-linear-progress mode="determinate" :value="50" color="orange"/>
            <span slot="right">0.8/10</span>
          </mu-list-item>
          <mu-flexbox justify="space-between" :gutter="3">
            <mu-flat-button label="修改密码"/>
            <mu-flat-button label="注销" @click="logout"/>
          </mu-flexbox>
        </mu-list>
      </mu-paper>
    </mu-popover>
    <mu-drawer right :open="drawer" :docked="false" @close="touchToggle()">
      <mu-list @itemClick="touchToggle()">
        <mu-list-item title="注册"/>
        <mu-list-item title="登录" @click="login_dialog = true"/>
      </mu-list>
    </mu-drawer>

    <mu-dialog :open="login_dialog" @close="close">
      <div class="dialog">
        <div slot="title" class="dialog_head">做产品
          <span style="font-weight: bold; font-size: 2rem">
          一个人在家也可以
          </span>
        </div>
        <mu-tabs :value="activeTab" @change="handleTabChange" style="width: 60%;background-color: #fff;">
          <mu-tab value="login" title="登录" style="color: #000"/>
          <mu-tab value="signup" title="注册" style="color: #000"/>
        </mu-tabs>
        <div v-if="activeTab === 'login'" style="width: 60%">
          <mu-text-field hintText="手机号" type="" icon="phone" v-model="loginInfo.userName" style="width: 100%"/>
          <br/>
          <mu-text-field hintText="密码" type="password" icon="lock" v-model="loginInfo.password" style="width: 100%"/>
          <br/>
          <div style="display: flex; justify-content: space-between">
            <mu-checkbox label="记住密码" v-model="remeberPWD"/>
            <a href="#">忘记密码?</a>

          </div>
          <div style="display: flex; justify-content: space-between">
            <mu-raised-button label="立即登录" primary @click="login"/>
            <mu-raised-button label="取消" @click=" login_dialog = false"/>
          </div>

          <div id="captcha">

          </div>
        </div>
        <div v-if="activeTab === 'signup'" style="width: 60%">
          <mu-text-field hintText="手机号" type="" icon="phone" v-model="signupInfo.cellphone" style="width: 100%"/>
          <mu-text-field hintText="密码" type="password" icon="lock" v-model="signupInfo.password" style="width: 100%"/>
          <mu-text-field hintText="确认密码" type="password" icon="lock" v-model="signupInfo.rePwd" style="width: 100%"/>

          <br/>
          <mu-checkbox label="确认并同意用户条款" v-model="signupInfo.agreeTermsheet"/>
          <br/>

          <!--验证码-->
          <!--<div class="captcha_action">-->
          <!--<mu-text-field label="请填写验证码" labelFloat style="width: 60%"/>-->
          <!--<mu-raised-button label="获取验证码" class="demo-raised-button" primary/>-->
          <!--</div>-->
          <div style="display: flex; justify-content: space-between">
            <mu-raised-button label="立即注册" primary @click="signup"/>
            <mu-raised-button label="取消" @click=" login_dialog = false"/>
          </div>

        </div>


      </div>
    </mu-dialog>

  </div>
</template>
<script>
  import LOGO_NOBACK from 'assets/LOGO-Zling2.png'
  import { mapState } from 'vuex'
  import userAvatorImg from 'assets/defaultUserlogo.png'
  import API from 'api'

  export default {
    data () {
      return {
        signupInfo: {
          cellphone: '',
          password: '',
          rePwd: '',
          agreeTermsheet: false
        },
        hideToast: false,
        remeberPWD: false,
        loginInfo: {
          userName: '',
          password: ''
        },
        activeTab: 'login',
        login_dialog: false,
        LOGO_NOBACK,
        userAvatorImg,
        msgOpen: false,
        userOpen: false,
        msgTrigger: null,
        userTrigger: null,
        anchorOrigin: {'vertical': 'bottom', 'horizontal': 'middle'},
        targetOrigin: {'vertical': 'top', 'horizontal': 'middle'},
        drawer: false
      }
    },
    components: {},
    methods: {
      openDialog (type) {
        this.activeTab = type
        this.login_dialog = true
      },
      login () {
        this.$store.commit('changeLoadState', true)
        this.$store.dispatch('loginByPhone', {
          userName: this.loginInfo.userName,
          password: this.loginInfo.password
        }).then(res => {
          if (res.status_code !== 1) {
            console.log(res)
            console.log('login success')
            this.login_dialog = false
            this.$store.commit('SET', {
              type: 'info',
              data: res.data
            })
            this.$store.commit('changeLoadState', false)
            this.$router.push('/index')
          }
        }, error => {
          this.login_dialog = false
          this.$store.commit('changeLoadState', false)
          console.log(error)
        })
      },
      signup () {
        if (this.signupInfo.agreeTermsheet) {
          if (this.signupInfo.password === this.signupInfo.rePwd) {
            let {cellphone, password, agreeTermsheet} = this.signupInfo
            this.$store.dispatch('signupByPhone', {cellphone, password, agreeTermsheet}).then(res => {
              //  if(res.errorCode === 0){}
              console.log(res)
              this.login_dialog = false

              this.$store.commit('SET', {
                type: 'info',
                data: res.data
              })
              this.$router.push('/index')
            })
          } else {
            this.errMsg = '请确认两次输入的密码一致'
          }
        } else {
          this.errMsg = '请先同意我们的条款'
        }
      },
      handleTabChange (val) {
        this.activeTab = val
      },
      close () {
        this.login_dialog = false
      },
      toIndex () {
        this.$router.push('/index')
      },
      handleClose () {
        this.userOpen = false
        this.msgOpen = false
      },
      toggle (type) {
        // console.log(type)
        this[type] = !this[type]
        // console.log(this[type])
      },
      logout () {
        API('logout').then(res => {
          this.userOpen = false
//          this.$store.commit('SET', {
//            type: 'user',
//            data: null
//          })
          location.reload()
          this.$router.push('/index')
        })
      },
      touchToggle () {
        this.drawer = !this.drawer
      }
    },
    computed: {
      ...mapState({
        loginTag: (state) => {
          return state.user.info !== null
        },
        userInfo: (state) => {
          return state.user.info
        }
      }),
      currentPath () {
        console.log(this.$route.path)
        return this.$route.path
      }
    },
    updated () {
      if (this.loginTag) {
        this.msgTrigger = this.$refs.msgButton.$el
        this.userTrigger = this.$refs.userButton.$el
      }
    },
    filters: {}
  }
</script>
<style scoped lang="less" ref="stylesheet/less">
  @import "../../../node_modules/muse-ui/src/styles/colors.less";

  .popop_user_profile {
    width: 300px;
    height: 240px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    margin-left: -200px;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    align-items: center;

    .dialog_head {
      text-align: center;
      color: #fff;
      line-height: 4rem;
      background: @purple300;
      width: 100%;
      border-radius: 6px 6px 0 0;
      height: 4rem;
    }

  }

  .tab {
    color: #000;
  }

  .pathActive {
    background-color: #9013FE;
    color: #fff;
  }

  @media (max-width: 600px) {
    .desktop {
      display: none
    }

    .mobile_device {
      color: #000
    }
  }

  @media (min-width: 720px) {
    .mobile_device {
      display: none
    }

    .desktop {
      height: 100%;
    }

  }

</style>
