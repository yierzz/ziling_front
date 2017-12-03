<template>
  <div class="wrapper">
    <h1>充值金额(元)</h1>

    <input v-model="totalmoney" type="number"/>
    <br/>

    <mu-tabs :value="activeTab" @change="handleTabChange" lineClass="underline" class="tabs">
      <mu-tab value="tab1" title="银行支付" class="tab"/>
      <mu-tab value="tab2" class="tab" title="移动支付"/>
    </mu-tabs>
    <h3>充值金额不少于1.00元</h3>

    <div style="display: flex; justify-content: flex-start; margin-top: 20px;">
      <mu-paper class="paper" :zDepth="1">
        <img src="../../assets/wechartPay.png" alt="alipaylogo">
        <mu-radio label="微信支付" name="payRadio" nativeValue="wechat" v-model="payMethod" labelLeft/>

      </mu-paper>
      <mu-paper class="paper" :zDepth="1">
        <img src="../../assets/aliPaylogo.png" alt="">

        <mu-radio label="支付宝支付" name="payRadio" nativeValue="alipay" v-model="payMethod" labelLeft/>

      </mu-paper>
    </div>
    <mu-raised-button label="支付" primary class="payButton" @click="submitChargeInfo"/>

    <mu-dialog :open="waittingDialog" title="充值">
      {{chargeMsg}}
      <mu-flat-button slot="actions" primary @click="confirmCharge" label="确定"/>
    </mu-dialog>
    <mu-dialog :open="payDialog" dialogClass="paydialog" actionsContainerClass="closeButton">
      <div class="dialogwrapper">
        <p class="messageHead"><img src="../../assets/message.png" alt="message"><span>订单信息</span></p>
        <ul class="userMessage clearfix">
          <li class="messageText">买家</li>
          <li class="messageBorder"></li>
          <li class="messageText">订单信息</li>
          <li class="messageBorder"></li>
          <li class="messageText">订单号</li>
          <li class="messageBorder"></li>
          <li class="messageText">金额</li>
        </ul>
        <ul class="personMessage">
          <li class="messageText">谁动了我的世界</li>
          <li class="messageText">用户充值</li>
          <li class="messageText">12345</li>
          <li class="messageText">12345</li>
        </ul>
        <img src="../../assets/alipay.png" class="alipay" alt="扫码">
      </div>
      <mu-flat-button slot="actions" @click="close" primary label="取消"/>
    </mu-dialog>

  </div>

</template>
<script>
  import API from '../../api'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        activeTab: 'tab1',
        payDialog: false,
        payMethod: 'alipay',
        totalmoney: 1,
        waittingDialog: false,
        chargeMsg: '请在弹出的页面中扫码完成支付，支付完成请点击下发的按钮确认'
      }
    },
    components: {},
    methods: {
      confirmCharge () {
        this.$store.commit('setWallet', {
          balance: 100
        })
        API('postConfirmCharge', {
          username: this.username
        }).then(res => {
          if (res.data.comfirm) {
            this.chargeMsg = '支付成功！'
            this.$store.commit('setWallet', {
              balance: res.data.balance
            })
            setTimeout(this.waittingDialog = false, 1000)
            console.log(res)
          }
        }, () => {
          this.chargeMsg = '网络错误请重试'
          setTimeout(this.waittingDialog = false, 1000)
        })
      },
      submitChargeInfo () {
        API('postChargeInfo', {
          username: this.username,
          totalMoney: this.totalmoney,
          transactionType: 'charge'
        }).then(res => {
          const div = document.createElement('div') // 创建div
          div.innerHTML = res.data // 将返回的form 放入div
          document.body.appendChild(div)
          const d = document.forms[0]
          d.target = '_blank'
          document.forms[0].submit()
          this.waittingDialog = true
        })
      },
      parse (arg) {
        let objE = document.createElement('div')
        objE.innerHTML = arg
        return objE.childNodes
      },
      handleTabChange (val) {
        this.activeTab = val
      },
      open () {
        this.payDialog = true
      },
      close () {
        this.payDialog = false
      }
    },
    computed: mapState({
      username: state => state.user.info.userName
    }),
    mounted () {}
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .demo-radioone {
    margin: 40px 0 0 160px;
    width: 250px;
    height: 68px;
    line-height: 68px;
    float: left;
    background: url(../../assets/wechartPay.png) no-repeat;
    padding: 10px 0 0 50px;

  }

  .demo-radiotwo {
    margin: 40px 0 0 60px;
    width: 250px;
    height: 68px;
    line-height: 68px;
    float: left;
    background: url(../../assets/aliPaylogo.png) no-repeat;
    padding: 10px 0 0 50px;

  }

  .paydialog {
    width: 500px;
    height: 418px;
  }

  .closeButton {
    width: 128px;
    height: 40px;
    margin: 0 0 20px 186px;
    background: #FFFFFF;
    border: 2px solid #E3E3E3;
    border-radius: 20px;
    padding-right: 20px;
  }

  .dialogwrapper {
    margin: 10px 0 0 20px;

    li {
      width: 110px;
      height: 46px;
      line-height: 46px;
      text-align: center;
      float: left;
    }

    .messageHead {
      font-weight: bold;
      width: 100px;
      height: 16px;
      font-size: 16px;
      color: #808080;
      letter-spacing: 0;
      line-height: 16px;
    }

    .messageText {
      width: 110px;
      height: 45px;
      line-height: 45px;
      text-align: center;

    }

    .userMessage {
      width: 450px;
      height: 46px;
      background: #F4F4F4;
      font-weight: Bold;
      font-size: 12px;
      color: #808080;
      letter-spacing: 0;
      line-height: 12px;

      .messageBorder {
        width: 1px;
        height: 12px;
        margin-top: 17px;
        background: #808080;
      }
    }

    .personMessage {
      width: 450px;
      height: 46px;
      font-size: 12px;
      color: #808080;
      letter-spacing: 0;
      line-height: 12px;
    }
    .alipay {
      width: 206px;
      height: 140px;
      margin: 20px 0 0 122px;
    }

  }

  .underline {
    width: 20px;
    background: #9013FE;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 30px;
      font-family: MicrosoftYaHei-Bold;
      font-size: 18px;
      color: #808080;
      letter-spacing: 0;
      line-height: 14px;
    }
    .tabs {
      background-color: #fff;
      .tab {
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #808080;
        letter-spacing: 0;
        width: 56px;
        line-height: 14px;
      }
    }

    input {
      margin-top: 20px;
      outline: none;
      width: 330px;
      background: #FFFFFF;
      border: 1px solid #E3E3E3;
      border-radius: 4px;
      height: 72px;
      font-family: Roboto-Bold;
      font-size: 56px;
      color: #808080;
      letter-spacing: 0;
      line-height: 48px;
      text-align: center;
    }
    h3 {
      margin-top: 10px;
      font-family: MicrosoftYaHei;
      font-size: 12px;
      color: #7D7D7D;
      letter-spacing: 0;
    }
    .paper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 14px;
      width: 250px;
      height: 68px;
      background: #FFFFFF;
      box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.08);
      border-radius: 4px;
      margin-right: 25px;
    }
    .payMode {
      overflow: hidden;
      background: #ffffff;
      color: #000000;
    }
    .payButton {
      margin-top: 55px;
      background: #9013FE;
      border-radius: 20px;
      margin-bottom: 40px;
    }

  }

</style>
