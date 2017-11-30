<template>
  <div class="main">
    <div class="title">
      <span class="integer">{{aggregateAmount}}</span><span class="deciamal">.00元</span>
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





    <div  style="margin-top: 50px;">
      <mu-raised-button label="充值" primary class="button" @click="RechargeDialog = true" style="margin-right: 40px;"/>
      <mu-raised-button label="提现"  class="button"/>
    </div>


    <!--<mu-list>-->
    <!--<mu-list-item v-for="(card,index) in bankCard" :title="card.bankName" :describeText="card.cardNumber"-->
    <!--:key="index" class="card_item">-->
    <!--<mu-badge :content="card.cardType" primary slot="right"/>-->
    <!--</mu-list-item>-->
    <!--</mu-list>-->
    <!--<mu-raised-button label="添加银行卡" primary @click=""/>-->

    <!--<mu-table :fixedFooter="false" fixedHeader :height="'300px'"-->
    <!--enableSelectAll multiSelectable-->
    <!--:selectable="false" :showCheckbox="false">-->
    <!--<mu-thead slot="header">-->
    <!--<mu-tr>-->
    <!--<mu-th tooltip="流水单号">流水单号</mu-th>-->
    <!--<mu-th tooltip="项目名称">项目名称</mu-th>-->
    <!--<mu-th tooltip="收支情况">资金情况</mu-th>-->
    <!--<mu-th tooltip="金额">金额</mu-th>-->

    <!--</mu-tr>-->
    <!--</mu-thead>-->
    <!--<mu-tbody>-->
    <!--<mu-tr v-for="item,index in tableData" :key="index" :selected="item.selected">-->
    <!--<mu-td>{{index + 1}}</mu-td>-->
    <!--<mu-td>{{item.projectName}}</mu-td>-->
    <!--<mu-td :style=[item.balance?incomeStyle:expenseStyle]>{{item.balance | balanceNormalizer}}</mu-td>-->
    <!--<mu-td>￥{{item.amount}}</mu-td>-->

    <!--</mu-tr>-->
    <!--</mu-tbody>-->
    <!--</mu-table>-->


    <mu-dialog :open="RechargeDialog" >
      <span slot="title">充值</span>
      <mu-text-field hintText="充值金额"/>
      <br/>
      <mu-raised-button label="支付宝"/>
      <mu-raised-button label="微信"/>
      <mu-raised-button label="银行卡"/>
      <mu-flat-button slot="actions" @click="closeRecharge" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="hanleRecharge" label="支付"/>
    </mu-dialog>


  </div>
</template>
<script>
  // import {getUserFundInfo} from '../../api/fund/base'
  import MuRaisedButton from '../../../node_modules/muse-ui/src/raisedButton/raisedButton.vue'

  export default {
    data () {
      return {
        incomeStyle: {
          color: 'red'
        },
        expenseStyle: {
          color: 'green'
        },
        tableData: [
          {
            projectName: '大项目',
            balance: true,
            amount: 100000
          },
          {
            projectName: '大项目',
            balance: false,
            amount: 100000
          },
          {
            projectName: '大项目',
            balance: true,
            amount: 100000
          },
          {
            projectName: '大项目',
            balance: false,
            amount: 100000
          }
        ],
        aggregateAmount: 10000,
        workingFund: 5000,
        fixedFund: 5000,
        bankCard: [
          {
            bankName: '中国建设银行',
            cardType: '储蓄卡',
            cardNumber: '**** **** **** 4567'
          },
          {
            bankName: '中国农业银行',
            cardType: '储蓄卡',
            cardNumber: '**** **** **** 1234'
          },
          {
            bankName: '中国招商银行',
            cardType: '信用卡',
            cardNumber: '**** **** **** 2345'
          }
        ],
        RechargeDialog: false
      }
    },
    components: {MuRaisedButton},
    methods: {
      closeRecharge () {
        this.RechargeDialog = false
      },
      hanleRecharge () {
        this.RechargeDialog = false
      }
    },
    computed: {},
    mounted () {
//      getUserFundInfo().then(res => {
//        console.log(res)
//      })
    },
    filters: {
      balanceNormalizer (balance) {
        if (balance > 0) {
          return '收入'
        } else {
          return '支出'
        }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

  .main{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 70px 0 80px 0;
    align-items: center;

    .title{
      font-family: Roboto-Bold;
      color: #808080;
      .deciamal{
        font-family: PingFang-SC-Bold;
        font-size: 20px;
        letter-spacing: 0;
        line-height: 48px;
      }
      .integer{
        font-family: Roboto-Bold;
        font-size: 56px;
        color: #808080;
        letter-spacing: 0;
        line-height: 48px;
      }
    }
    .subtitle{
      font-family: MicrosoftYaHei;
      font-size: 14px;
      color: #808080;
      letter-spacing: 0;
      > span{
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
