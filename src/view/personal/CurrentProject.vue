<template>
  <div style="padding: 20px;">
    <div class="header">
      <div>
        <div class="title">一款基于实名认证的线上线下互动的社交软件，已有原型。IOS</div>
        <span class="sub" style="margin-right: 65px;"> 任务悬赏<span class="number">15000</span></span>
        <span class="sub">预计周期<span class="number">32天</span></span>
      </div>
      <mu-raised-button label="进度汇报" primary/>

    </div>

    <mu-divider style="margin: 20px 0 26px 0;"/>
    <div class="body">
      <div class="title">
        <mu-icon value="date_range"/>
        任务总进度
      </div>
      <mu-stepper :activeStep="3">
        <mu-step>
          <mu-step-label>
            进度1
          </mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label>
            进度2
          </mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label>
            进度3
          </mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label>
            进度4
          </mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label>
            进度5
          </mu-step-label>
        </mu-step>
      </mu-stepper>
      <div class="grey_bg">
        <mu-row class="process" v-for="p,index in processList" :key="index">
          <mu-col width="100" tablet="50" desktop="10">{{p.title}}</mu-col>
          <mu-col width="100" tablet="50" desktop="90">
            <mu-stepper :activeStep="p.active">
              <mu-step>
                <mu-step-label>
                  进度1
                </mu-step-label>
              </mu-step>
              <mu-step>
                <mu-step-label>
                  进度2
                </mu-step-label>
              </mu-step>
              <mu-step>
                <mu-step-label>
                  进度3
                </mu-step-label>
              </mu-step>
              <mu-step>
                <mu-step-label>
                  进度4
                </mu-step-label>
              </mu-step>
              <mu-step>
                <mu-step-label>
                  进度5
                </mu-step-label>
              </mu-step>
            </mu-stepper>
          </mu-col>
        </mu-row>


      </div>
    </div>


    <!--<mu-row gutter>-->
    <!--<mu-col desktop="60">-->
    <!--<h2 class="title">一款基于实名认证的线上线下互动的社交软件，已有原型。IOS</h2>-->
    <!--<span class="money_number">￥80000</span>-->
    <!--<span class="second_title">交付时间: 2017-06-04</span>-->
    <!--&lt;!&ndash;<p class="pragraph">&ndash;&gt;-->
    <!--&lt;!&ndash;本项目是基于实名认证（包含职业、学历、房产、汽车认证）主打线上聊天，线下活动的相亲交友软件。功能需求适配iPhone4s及以上iPhon备，IOS7及以上版本。主要功能包含：启动引导页，手机号注册，会员展示与筛选，线下活动报名支付，聊天功能，个人资料，会员购买功能，消息通知与推送。APP构架App主要有“约见”“线下活动”“聊天”“我”4个主页面【约见】-包含&ndash;&gt;-->
    <!--&lt;!&ndash;会员展示、搜索、筛选功能【线下活动】-包含“活动”“往期精彩”两个子页面，“活动”包含报名支付功能【聊天】包含文字、图片、语音、表情基本聊天功能【我】包含详细个人资料、设置、实名认证、社交记录、谁看过我等功能&ndash;&gt;-->
    <!--&lt;!&ndash;</p>&ndash;&gt;-->
    <!--</mu-col>-->
    <!--<mu-col desktop="40">-->
    <!--<mu-raised-button label="进度汇报" fullWidth primary/>-->
    <!--<mu-raised-button label="交付" fullWidth primary/>-->
    <!--<mu-raised-button label="B&P" />-->
    <!--<mu-raised-button label="申请退出" />-->


    <!--</mu-col>-->
    <!--</mu-row>-->


  </div>
</template>
<script>

  import MuDivider from '../../../node_modules/muse-ui/src/divider/divider.vue'

  export default {
    data () {
      return {
        activeStep: 0,
        processList: [{
          title: '设计进度',
          active: 2
        }, {
          title: '前端进度',
          active: 4
        }, {
          title: '后端进度',
          active: 3
        }]
      }
    },
    components: {MuDivider},
    methods: {},
    computed: {}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    > div {
      .title {
        font-family: MicrosoftYaHei-Bold;
        font-size: 14px;
        color: #808080;
        letter-spacing: 0;
        line-height: 14px;
        margin-bottom: 25px;
        font-weight: bold;
      }
      .sub {
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #BCBCBC;
        letter-spacing: 0;
        line-height: 12px;
        > span {
          font-family: Roboto-Bold;
          font-size: 20px;
          color: #FF5B00;
          letter-spacing: 0;
          line-height: 20px;
        }
      }
    }
  }

  .body {
    .title {
      font-family: MicrosoftYaHei-Bold;
      font-size: 14px;
      color: #808080;
      letter-spacing: 0;
      line-height: 14px;
      font-weight: bold;
    }
    .grey_bg {
      background: rgba(211, 209, 209, 0.1);
      border-radius: 10px;
      padding: 0 20px;
      .process {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;

      }
    }
  }

</style>
