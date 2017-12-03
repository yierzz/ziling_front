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

          <mu-flat-button v-if="loginTag" slot="right" color="grey" label="钱包" ref="payButton" icon="attach_money" @hover="toggle('payOpen')" to="/personal"/>
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

    <mu-popover :trigger="payTrigger" :open="payOpen" @close="handleClose" :anchorOrigin="anchorOrigin"
                :targetOrigin="targetOrigin" v-if="loginTag">
      <div class="recharge" style="width:120px;">
        <div class="reamount" style="background-color:#aa00ff">
          <p style="color:#fff;margin-top:0px; margin-left:20px;">账户余额(元)</p>
          <h1 style="color:#fff; margin-top:-10px;margin-left:20px;">{{aggregateAmount}}</h1>
        </div>
        <mu-raised-button label="充值" primary to="/personal/pre_pay" style="margin-left:15px; margin-top: -5px; font-size: 12px; border-radius: 20px; height: 25px;"/>
        <br/>
        <mu-raised-button label="提现" style="margin-left:15px; margin-top: 5px; font-size: 12px; border-radius: 20px; height: 25px;"/>
        <div style="color: grey; font-size: 12px; margin-top: 10px; margin-left:35px;">交易记录</div>
      </div>
    </mu-popover>

    <mu-popover :trigger="msgTrigger" :open="msgOpen" @close="handleClose" :anchorOrigin="anchorOrigin"
                :targetOrigin="targetOrigin" v-if="loginTag">
      <mu-menu>

        <mu-menu-item title="系统通知" style="margin-left: 20px;">
          <mu-badge content="0" slot="after" style="margin-right: 25px;"/>
        </mu-menu-item>
        <mu-menu-item title="聊天消息" style="margin-left: 20px;">
          <mu-badge content="0" slot="after" style="margin-right: 25px;"/>
        </mu-menu-item>
        <mu-menu-item title="为你推荐" style="margin-left: 20px;">
          <mu-badge content="0" slot="after" style="margin-right: 25px;"/>
        </mu-menu-item>
      </mu-menu>
    </mu-popover>

    <mu-popover :trigger="userTrigger" :open="userOpen" :anchorOrigin="anchorOrigin"
                :targetOrigin="targetOrigin" @close="handleClose" v-if="loginTag">
      <mu-paper class="popop_user_profile" style="padding: 0 20px 0px 20px">
        <div style="font-size: 22px; line-height: 30px; color: rgb(102, 102, 102); text-align: center; margin-top: 10px;">{{userInfo.cellphone }}</div>
        <mu-badge content="LV1" style="margin-top: -22px; margin-left: 80px;" color="#F6DB65"/>
        <div class="grey_bkg" style="margin-top: 10px;">
          <mu-divider shadowLiner/>
          <div class="title">资质等级:{{capacity_rank}}</div>
          <mu-linear-progress mode="determinate" class="linear" :value="capacity_rank*10" color="#4A5AF8"/>
          <div class="title">信用等级:{{credit_rank}}</div>
          <mu-linear-progress mode="determinate" :value="credit_rank*10" class="linear" color="#5ECD87"/>
          <div class="title"> 评价星级:{{evaluate_rank}}</div>
          <star-rank v-bind:rank="evaluate_rank"></star-rank>
          <mu-divider shadowLiner/>
        </div>
        <mu-list class="list_item" >
          <mu-list-item title="紫领简历" to="/personal/info-modify"/>
          <mu-divider shadowLiner/>
          <mu-list-item title="编辑简历" to="/personal/info-modify" />
          <mu-divider shadowLiner/>
          <mu-list-item title="资格认证" />
          <mu-divider shadowLiner/>
          <mu-list-item title="会员充值" />
          <mu-divider shadowLiner/>
        </mu-list>
        <mu-raised-button label="退出" style="justify-content: center; border-radius: 20px; font-size: 12px; height:30px;" @click="logout"/>        
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

          <mu-text-field hintText="手机号" icon="person" v-model="loginInfo.userName" style="width: 100%"/>
          <br/>
          <mu-text-field hintText="密码" icon="lock" v-model="loginInfo.password" style="width: 100%"/>
          <br/>
          <div style="display: flex; justify-content: space-between">
            <mu-checkbox label="记住密码" style="margin-left: 17px;margin-top:-10px;" v-model="remeberPWD"/>
            <div style="margin-top:-10px;">忘记密码?</div>

          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 10px; margin-left: 20px;">

            <mu-raised-button label="立即登录" primary @click="login"/>
            <mu-raised-button label="取消" @click=" login_dialog = false"/>
          </div>

          <div id="captcha">

          </div>
        </div>
        <div v-if="activeTab === 'signup'" style="width: 60%">

          <mu-text-field hintText="手机号" icon="phone_iphone" v-model="signupInfo.cellphone" style="width: 100%"/>
          <mu-text-field hintText="密码" icon="lock" v-model="signupInfo.password" style="width: 100%"/>
          <mu-text-field hintText="确认密码" icon="lock" v-model="signupInfo.rePwd" style="width: 100%"/>

          <br/>
          <mu-checkbox label="我同意《紫领用户注册协议》" style="margin-left:100px;margin-top:-10px;" v-model="signupInfo.agreeTermsheet"/>

          <br/>

          <!--验证码-->
          <!--<div class="captcha_action">-->
          <!--<mu-text-field label="请填写验证码" labelFloat style="width: 60%"/>-->
          <!--<mu-raised-button label="获取验证码" class="demo-raised-button" primary/>-->
          <!--</div>-->

          <div style="display: flex; justify-content: space-between; margin-left: 20px;margin-top:10px;">

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
  import StarRank from '../../components/star_rank.vue'

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
        payOpen: false,
        msgTrigger: null,
        userTrigger: null,
        payTrigger: null,
        anchorOrigin: {'vertical': 'bottom', 'horizontal': 'middle'},
        targetOrigin: {'vertical': 'top', 'horizontal': 'middle'},
        drawer: false,
        credit_rank: 8.2,
        capacity_rank: 9.8,
        evaluate_rank: 4.2,
        aggregateAmount: 10000
      }
    },
    components: {
      'star-rank': StarRank
    },

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
        this.payOpen = false
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
        this.payTrigger = this.$refs.payButton.$el
      }
    },
    filters: {}
  }
</script>
<style scoped lang="less" ref="stylesheet/less">
  @import "../../../node_modules/muse-ui/src/styles/colors.less";

  .popop_user_profile {
    width: 240px;
    height: 480px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    margin-left: -160px;

    .list_item {
      margin-top: -24px;
      font-size: 12px;
      font-family: MicrosoftYaHei;
      text-align: center;
    }

    .grey_bkg {
      .linear {
        width: 220px;
        margin-top: 8px;
        height: 10px;
        border-radius: 5px;
      }
      .title {
        margin-top: 15px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #808080;
        letter-spacing: 0;
      }
      margin-bottom: 20px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      width: 260px;
    }
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
