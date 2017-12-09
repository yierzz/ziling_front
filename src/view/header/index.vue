<template>
  <div>
    <mu-appbar style="background-color: #fff;height:80px; box-shadow: none; width: 1200px; margin: 0 auto">
      <a @click="toIndex" slot="left" style="width: 100px;height: 100%; cursor: pointer; margin-right: 116px;">
        <img :src="LOGO_NOBACK" slot="left" style="width: 100%">
      </a>
      <div class="desktop" slot="left" style="display: flex; align-items: center;">
        <mu-flat-button slot="left" color="black" label="首页" to="/index" style="height: 30px;border-radius: 18px" activeClass="pathActive" :color="currentPath === '/index' ? '#fff': '#000' "/>
        <mu-flat-button slot="left" color="black" label="聘请紫领" to="/recruit" style="height: 30px;border-radius: 18px"activeClass="pathActive" :color="currentPath === '/recruit' ? '#fff': '#000' "/>
        <mu-flat-button slot="left" color="black" label="任务列表" to="/projects" style="height: 30px;border-radius: 18px"activeClass="pathActive" :color="currentPath === '/projects' ? '#fff': '#000' "/>
        <mu-flat-button slot="left" color="black" label="帮助" to="/help" :rippleOpacity="0"
                        style="height: 30px;border-radius: 18px" activeClass="pathActive"
                        :color="currentPath === '/help' ? '#fff': '#000' "/>
      </div>
      <div class="desktop" slot="right">

        <div v-if="loginTag" slot="right" style="height: 100%">

          <mu-flat-button v-if="loginTag" slot="right" label=" " color="grey"  ref="payButton" 
          icon="account_balance_wallet"  @hover="toggle('payOpen')"  to="/personal"/>

          <mu-flat-button v-if="loginTag" slot="right" label=" " color="grey"  ref="msgButton"
          icon="assignment_turned_in" @hover="toggle('msgOpen')" to="/personal/message"/>
          <mu-flat-button v-if="loginTag" slot="right" label=" " color="grey" icon="notifications" to="/other"/>

          <mu-flat-button v-if="loginTag" slot="right"  ref="userButton" @hover="toggle('userOpen')" to="/personal">
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
    <!-- 第一个弹框 -->
    <mu-popover :trigger="payTrigger" :open="payOpen" @close="handleClose" :anchorOrigin="anchorOrigin"
                :targetOrigin="targetOrigin" v-if="loginTag">
      <div class="firstPop" style="width:180px;height:206px;">
        <!-- 账户余额 -->
        <div class="reamount" style="background-color:#aa00ff;color:#FFFFFF;padding-left:56px;padding-top:5px">
          <p >账户余额(元)</p>
          <p style="font-style:italic;font-size: 28px;cletter-spacing: 0;margin-top:-8px;">{{aggregateAmount}}</p>
        </div>
        <mu-raised-button label="充值" primary to="/personal/pre_pay" style="margin-left:24px; margin-top: -15px;width:140px; font-size: 12px; border-radius: 15px; height: 25px;"/>
        <br/>
        <mu-raised-button label="提现" style="width:140px; margin-left:24px; margin-top: 5px; font-size: 12px;color: #808080;letter-spacing: 0;line-height: 12px;border-radius: 15px; height: 25px;"/>
        <a href=""style="text-decoration:underline;font-size: 12px;color: #808080;letter-spacing: 0;line-height: 12px; margin-top: 7px; margin-left:66px;">交易记录</a>
      </div>
    </mu-popover>
    <!-- 第二个弹框 -->
    <mu-popover :trigger="msgTrigger" :open="msgOpen" @close="handleClose" :anchorOrigin="anchorOrigin"
                :targetOrigin="targetOrigin" v-if="loginTag">
      <mu-menu>
        <mu-menu-item title="系统通知" style="padding-left:20px;border-bottom: 1px solid #E3E3E3;">
          <mu-badge content="0" color=" #EE5959" slot="after" badgeClass="badgeOval" />
        </mu-menu-item>
        <mu-menu-item title="聊天消息" style="padding-left:20px;border-bottom: 1px solid #E3E3E3;">
          <mu-badge content="0" color=" #EE5959" slot="after"badgeClass="badgeOval"/>
        </mu-menu-item>
        <mu-menu-item title="为你推荐" style="padding-left:20px;">
          <mu-badge content="0" color=" #EE5959" slot="after" badgeClass="badgeOval"/>
        </mu-menu-item>
      </mu-menu>
    </mu-popover>
    <!-- 第三个弹框 -->
    <mu-popover :trigger="userTrigger" :open="userOpen" :anchorOrigin="anchorOrigin"
                :targetOrigin="targetOrigin" @close="handleClose" v-if="loginTag">
      <mu-paper class="popop_user_profile">
        <div style="font-size: 22px; line-height: 30px; color: rgb(102, 102, 102); text-align: center; margin-top: 10px;">{{userInfo.cellphone}}sf</div>
        <mu-badge content="LV1" style="margin-top: -22px; margin-left: 80px;" color="#F6DB65"/>
        <div style="margin:10px 0 10px 0;font-family: MicrosoftYaHei;font-size: 12px;color: #808080;letter-spacing: 0;line-height: 12px;">工号：{{user_jobnum}}</div>
        <div class="grey_bkg" >
          <mu-divider shadowLiner/>
          <div class="title">能力等级:{{capacity_rank}}</div>
          <mu-linear-progress mode="determinate" class="linear" :value="capacity_rank*10" color="#4A5AF8"/>
          <div class="title">信用等级:{{credit_rank}}</div>
          <mu-linear-progress mode="determinate" :value="credit_rank*10" class="linear" color="#5ECD87"/>
          <div class="title"> 评价星级:{{evaluate_rank}}</div>
          <star-rank width="200px" v-bind:rank="evaluate_rank"></star-rank>
          <mu-divider shadowLiner/>
        </div>
        <mu-list class="list_item" >
          <mu-list-item titleClass="itemFont" title="紫领简历" to="/personal/info-modify"/>
          <mu-divider shadowLiner/>
          <mu-list-item titleClass="itemFont" title="编辑简历" to="/personal/info-modify" />
          <mu-divider shadowLiner/>
          <mu-list-item titleClass="itemFont" title="资格认证" />
          <mu-divider shadowLiner/>
          <mu-list-item titleClass="itemFont" title="会员充值" />
          <mu-divider shadowLiner/>
        </mu-list>
        <mu-raised-button label="退出" style="justify-content: center; background: #FFFFFF;border: 1px solid #E3E3E3;border-radius: 15px;font-size: 12px; color: #808080;height:30px;" @click="logout"/>        
      </mu-paper>
    </mu-popover>

    <mu-drawer right :open="drawer" :docked="false" @close="touchToggle()">
      <mu-list @itemClick="touchToggle()">
        <mu-list-item title="注册"/>
        <mu-list-item title="登录" @click="login_dialog = true"/>
      </mu-list>
    </mu-drawer>
    
    <mu-dialog :open="login_dialog" @close="close" dialogClass="dialog">
      <div >
        <div class="dialog_head"></div>
        <mu-tabs :value="activeTab" @change="handleTabChange" style="width: 400px;background-color: #fff;">
          <mu-tab value="login" title="登录" style="color: #000"/>
          <mu-tab value="signup" title="注册" style="color: #000"/>
        </mu-tabs>
        <!-- 登录 -->
        <div v-if="activeTab === 'login'" >
          <mu-text-field hintText="手机号/电子邮箱"  underlineClass="none" hintTextClass="hint_font" icon="person" v-model="loginInfo.userName" style="width:320px;height:40px;border: 1px solid #E3E3E3;border-radius: 20px;margin:40px 0 20px 40px;"/>
          <mu-text-field hintText="请输入您的密码" underlineClass="none" hintTextClass="hint_font" icon="lock" v-model="loginInfo.password" type="password" style="width:320px;height:40px;border: 1px solid #E3E3E3;border-radius: 20px;margin-left:40px;"/>
          <br/>
          <div class="password">
            <mu-checkbox label="记住密码" v-model="remeberPWD" labelClass="check_font" uncheckIcon="radio_button_unchecked" checkedIcon="radio_button_checked" style="margin-right: 146px;"/>
            <a class="forget_pass" href=":;">忘记密码?</a>
          </div>
          <div style="display:flex; justify-content:left;">

            <mu-raised-button label="立即登录" primary class="confirmBtn" @click="login" />

            <mu-raised-button label="取消" class="cancelBtn" @click="login_dialog = false" />
          </div>

          <div id="captcha">
          </div>
        </div>
        <!-- 注册 -->
        <div v-if="activeTab === 'signup'">
          <!-- 验证码 -->
          <div style="display:flex;justify-content:space-around;margin-top:40px;">
            <mu-text-field hintText="手机" underlineClass="none" hintTextClass="hint_font"  icon="phone_iphone" v-model="signupInfo.cellphone" style="width:210px;height:40px;border: 1px solid #E3E3E3;border-radius: 20px;margin-bottom:20px;"/>

            <mu-raised-button label="获取验证码" style="background: #FFFFFF;border: 1px solid #E3E3E3;border-radius: 20px;font-family: MicrosoftYaHei;font-size: 12px;color: #808080;     letter-spacing: 0;line-height: 12px;margin-bottom:20px;"/>
          </div>
          <mu-text-field hintText="请输入验证码"  underlineClass="none" hintTextClass="hint_font" icon="email"   style="width:320px;height:40px;background:#FFFFFF;border: 1px solid #E3E3E3;border-radius: 20px;margin-left:25px;margin-bottom:20px;"/>
          <!-- 密码 -->
          <mu-text-field hintText="请输入您的密码" underlineClass="none" hintTextClass="hint_font" icon="lock" type="password"  v-model="signupInfo.password" style="width:320px;height:40px;border: 1px solid #E3E3E3;border-radius: 20px;margin-left:25px;margin-bottom:20px;"/>
          <mu-text-field hintText="请再次输入您的密码" underlineClass="none" hintTextClass="hint_font" icon="lock"  type="password" v-model="signupInfo.rePwd"  style="width:320px;height:40px;border: 1px solid #E3E3E3;border-radius: 20px;margin-left:25px;"/>
          <div style="display:flex;justify-content:center">
            <mu-checkbox label="我同意" labelClass="check_font" v-model="signupInfo.agreeTermsheet" uncheckIcon="radio_button_unchecked" checkedIcon="radio_button_checked" />
            <a href="" class="aggrement" 
            style="">《紫领用户协议》</a>
          </div>
          
          <div style="display:flex; justify-content:left;margin-top:32px;">

            <mu-raised-button label="立即注册" primary class="confirmBtn" @click="signup" />

            <mu-raised-button label="取消" class="cancelBtn" @click="login_dialog = false" />
          </div>
          <!-- <mu-text-field hintText="密码" icon="lock" v-model="signupInfo.password" style="width: 100%"/> -->
          <!-- <mu-text-field hintText="确认密码" icon="lock" v-model="signupInfo.rePwd" style="width: 100%"/> -->
         <!--  <mu-checkbox label="我同意《紫领用户注册协议》" style="margin-left:100px;margin-top:-10px;" v-model="signupInfo.agreeTermsheet"/> -->
          <!-- <br/> -->
          <!--验证码-->
          <!--<div class="captcha_action">-->
          <!--<mu-text-field label="请填写验证码" labelFloat style="width: 60%"/>-->
          <!--<mu-raised-button label="获取验证码" class="demo-raised-button" primary/>-->
          <!--</div>-->

         <!--  <div style="display: flex; justify-content: space-between; margin-left: 20px;margin-top:10px;">

            <mu-raised-button label="立即注册" primary @click="signup"/>
            <mu-raised-button label="取消" @click=" login_dialog = false"/>
          </div> -->
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
        user_jobnum: 1234,
        aggregateAmount: 10000.00
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
 <style lang="css" ref="stylesheet/css">
  .popop_user_profile {
    width: 240px;
    height: 470px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    margin-left: -160px;
    }
     .list_item {
      margin-top: -24px;
      font-size: 12px;
      color: #808080;
      font-family: MicrosoftYaHei;
      text-align: center;
    }
    .grey_bkg {
      margin-bottom: 20px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      width: 260px;
      }
      .linear {
        width: 220px;
        margin-top: 8px;
        height: 10px;
        border-radius: 5px;
      }
      .title {
        margin:8px 0;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #808080;
        letter-spacing: 0;
      }
  
      .tab {
        color: #000;
      }
      .pathActive {
        background: #9013FE !important;
        color: #fff;
      }
      .dialog {
        width:400px !important;
        background: #FFFFFF;
        border-radius: 8px !important;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .dialog_head{
        width: 376px;
        height: 56px;
        background: url(../../assets/slogan.png);
        border-radius: 8px 8px 0 0;
      }
      .hint_font{
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #BCBCBC;
      }
      .password{
        width: 320px;
        display: flex;
        justify-content: left;
        margin: 0 0 32px 52px;
      }
      .forget_pass{
        width: 60px;
        height: 12px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #808080;
        line-height: 12px;
      }
      .check_font{
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #808080 !important;
        line-height: 12px;
      }
      .confirmBtn{
        width: 150px;
        height: 30px;
        background: #9013FE !important;
        border-radius: 15px !important;
        margin: 0 20px 0 40px !important;
      }
      .cancelBtn{
        width: 150px;
        height: 30px;
        background: #FFFFFF !important;
        border: 1px solid #E3E3E3 !important;
        border-radius: 15px !important;
      }
      .none{
        display: none;
      }
      .aggrement{
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #9013FE;
        line-height: 12px;
        padding-top:5px;
      }
      .badgeOval{
        margin-right: 25px;
        border-radius: 8px !important;
      }
      .itemFont{
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #808080;
        letter-spacing: 0;
        line-height: 12px;
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
