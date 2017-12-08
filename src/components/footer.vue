<template>
  <div>
    <div class="footer">
      <div class="links">
        <p>关于紫领</p>
        <a href="" class="link_item">紫领介绍</a>
        <a href="" class="link_item">公司资质</a>
        <a href="" class="link_item">案例展示</a>
        <a href="" class="link_item">职业社区</a>
        <a href="" class="link_item">APP下载</a>
        <a href="" class="link_item">联系我们</a>
      </div>
      <div class="links">
        <p>媒体报道</p>
        <a href="" class="link_item">新闻网</a>
        <a href="" class="link_item">获奖</a>
        <a href="" class="link_item">合作伙伴</a>
      </div>
      <div class="links">
        <p>法律和条款</p>
        <a href="" class="link_item">隐私政策</a>
        <a href="" class="link_item">版权政策</a>
        <a href="" class="link_item">行为守则</a>
        <a href="" class="link_item">条款与条件</a>
      </div>
      <img :src="qrCodes" class="QrCode" alt="qrCodes">
      <div class="links">
        <a href="" class="link_item"><img :class="logo" src="../../logo.png" alt=""></a>
        <div class="link_mes">电话:027-87755388</div>
        <div class="link_mes">手机:18202786345</div>
        <div class="link_mes">邮箱:zling@zling.net</div>
      </div>
    </div>
  </div>
</template>
<script>
  import qrCodes from '../assets/qrCodes.png'
  export default {
    data () {
      return {
        qrCodes
      }
    },
    components: {},
    methods: {},
    computed: {}
  }
</script>
<style scoped lang="scss" ref="stylesheet/scss">
  .footer {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    position: relative;
    margin:50px 0 0 50px;

    .QrCode{
      margin:47px 20px 0 34px;
    }
    .links {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
      margin:34px 110px 0 0;

      .logo{
        margin-top:10px;
      }
      .link_item {
        line-height:22px;
        color: #807e7e;
        font-size: 14px;
        text-align: left;
        cursor: pointer;
        padding-left: 4px;
        padding-right: 4px;
      }
      .link_mes{
        width:240px;
        height:16px;
        line-height:16px;
        margin-bottom:13px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #7D7D7D;
        letter-spacing: 0;
      }

    }
  }
</style>
