<template>
  <div class="main">
    <div class="title">
      <span class="integer">{{wallet.balance}}</span><span class="deciamal">.00元</span>
    </div>
    <div class="subtitle" style="margin-top: 10px;">
      钱包余额:   <span>
        {{aggregateAmount}}
      </span>

    </div>
    <div class="subtitle" style="margin-top: 48px;">
      固定资金: <span style="margin-right: 40px;">{{workingFund}}元</span>
      流动资金: <span>{{fixedFund}}元</span>
    </div>

    <div style="margin-top: 50px;">
      <mu-raised-button label="充值" primary class="button" @click="GoPrepay" style="margin-right: 40px;"/>
      <mu-raised-button label="提现" class="button"/>
    </div>
  </div>
</template>
<script>
  // import {getUserFundInfo} from '../../api/fund/base'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        aggregateAmount: 10000,
        workingFund: 5000,
        fixedFund: 5000
      }
    },
    components: {},
    methods: {
      GoPrepay: function () {
        this.$router.push({path: '/personal/pre_pay'})
      }
    },
    computed: mapState({
      wallet: state => state.user.wallet
    }),
    mounted () {
//      getUserFundInfo().then(res => {
//        console.log(res)
//      })
    },
    filters: {}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

  .main {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 70px 0 80px 0;
    align-items: center;

    .title {
      font-family: Roboto-Bold;
      color: #808080;
      .deciamal {
        font-family: PingFang-SC-Bold;
        font-size: 20px;
        letter-spacing: 0;
        line-height: 48px;
      }
      .integer {
        font-family: Roboto-Bold;
        font-size: 56px;
        color: #808080;
        letter-spacing: 0;
        line-height: 48px;
      }
    }
    .subtitle {
      font-family: MicrosoftYaHei;
      font-size: 14px;
      color: #808080;
      letter-spacing: 0;
      > span {
        font-family: MicrosoftYaHei-Bold;
        font-size: 14px;
        color: #323232;
        letter-spacing: 0;
        line-height: 19px;
        font-weight: bold;
      }
    }

  }
</style>
