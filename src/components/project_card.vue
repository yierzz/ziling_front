<template>
  <div class="card">
    <mu-paper >
      <router-link :to="`/project/detail/${project.taskId}`">
        <mu-row gutter>
          <!--<mu-col>-->
          <mu-col width="100" tablet="50" desktop="34">
            <div class="left">
              <div class="project_status" :style="{backgroundImage: `url(${ProRank})`}"></div>
              <!--<div class="project_status">{{project.proLevel}}</div>-->
              <div class="project_icon" :style="{backgroundImage: `url(${ProType})`}"></div>
              <!--<img  class="project_icon" src="../assets/安卓.png" alt="图片加载失败"/>-->
            </div>
          </mu-col>
          <!--<mu-col>-->
          <mu-col width="100" tablet="50" desktop="66">
            <div class="right">
              <div class="title">
                {{project.proName}}
              </div>
              <div class="pro-text">
                <div>项目悬赏</div>
                <div class="pro-text-2">预计周期</div>
              </div>
              <div class="pro-value">
                <div class="price">{{project.proPrice}}<label>元</label></div>
                <div class="period">{{project | dateFormat}}<label>天</label></div>
              </div>
            </div>
          </mu-col>
        </mu-row>

      </router-link>

    </mu-paper>
  </div>
</template>
<script>
  import A from '../assets/A.png'
  import AP from '../assets/A+.png'
  import B from '../assets/B.png'
  import C from '../assets/C.png'
  import S from '../assets/S.png'

  import android from '../assets/安卓.png'
  import web from '../assets/WEB.png'
  import ios from '../assets/苹果.png'
  import wechat from '../assets/微信.png'

  export default {
    name: 'project-card',
    props: {
      project: {
        type: Object
      }
    },
    data () {
      return {
        ProRank: '',
        ProType: ''
      }
    },
    components: {},
    methods: {},
    computed: {},
    filters: {
      dateFormat (project) {
        let start = new Date(project.endedOn)
        let end = new Date(project.applyDeadline)
//        console.log(start, end)
        let period = Date.parse(start) - Date.parse(end)
//        console.log(period)
//        let periodY =
//        let periodM =
        let periodD = period / 86400000
//        console.log(periodD)
        return periodD
      }
    },
    created () {
      switch (this.project.proLevel) {
        case 'C': {
          console.log('c')
          this.ProRank = C
          break
        }
        case 'A+': {
          console.log('ap')
          this.ProRank = AP
          break
        }
        case 'A': {
          console.log('a')
          this.ProRank = A
          break
        }

        case 'B': {
          console.log('b')
          this.ProRank = B
          break
        }

        case 'S': {
          console.log('')
          this.ProRank = S
          break
        }
      }
      switch (this.project.proType) {
        case '苹果': {
          this.ProType = ios
          break
        }
        case '微信': {
          this.ProType = wechat
          break
        }
        case 'WEB': {
          this.ProType = web
          break
        }
        case '安卓': {
          this.ProType = android
          break
        }

      }
//      this.ProType = import('../assets/protype/' + this.project.proType)
    }
  }

</script>
<style scoped lang="less" ref="stylesheet/less">
  @import "../../node_modules/muse-ui/src/styles/import.less";

  .card {
    width: 360px;
    height: 124px;
    background: #FFFFFF;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    display:flex;
    justify-content:center;
    margin-bottom: 30px;
  }

  .mu-paper {
    width: 360px;
    height: 124px;
  }

  .left {
    .project_status {
      position: absolute;
      width: 32px;
      height: 32px;
      margin-left: 13px;
      margin-top: 15px;
      background-image: linear-gradient(-46deg, #5ECD87 0%, #8EF5CC 100%);
      /*background-image: url("../assets/A+.png");*/
      z-index: 2;
    }
    .project_icon {
      position: absolute;
      width: 88px;
      height: 88px;
      margin: 18px;
      background-image: linear-gradient(-135deg, #FFC9BC 0%, #FE6666 100%);
    }
  }

  .right {
    margin-top: 23px;
    .title {
      font-family: MicrosoftYaHei-Bold;
      font-size: 14px;
      color: #808080;
      letter-spacing: 0;
      line-height: 14px;

      margin-left: 0px;
      width: 182px;
      height: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .pro-text {
      font-family: MicrosoftYaHei;
      font-size: 12px;
      color: #BCBCBC;
      letter-spacing: 0;
      line-height: 12px;

      margin-top: 22px;
      display: flex;
      .pro-text-2 {
        margin-left: 63px;
      }
    }
    .pro-value {
      ont-family: Roboto-Bold;
      font-size: 20px;
      color: #FF5B00;
      letter-spacing: 0;
      line-height: 20px;

      margin-top: 10px;
      display: flex;
      .price {

      }
      .period {
        position: absolute;
        margin-left: 111px;
      }
      label {
        font-size: 13px;
        margin-left: 4px
      }
    }

  }

</style>
