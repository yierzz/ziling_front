<template>
  <div class="card">
    <mu-paper :zDepth="2">
      <router-link :to="`/project/detail/${project.taskId}`">
        <!--<div class="mu-grid-tile">-->
        <!--<img :src="img"></img>-->
        <!--<div class="mu-grid-tile-titlebar">-->
        <!--<div class="mu-grid-tile-title-container">-->
        <!--<div class="mu-grid-tile-title">-->
        <!--<slot name="title">-->
        <!--{{project_title}}-->
        <!--</slot>-->
        <!--</div>-->
        <!--<div class="mu-grid-tile-subtitle">-->
        <!--<slot name="subTitle">-->
        <!--项目周期 {{project_duration}}天-->
        <!--</slot>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="mu-grid-tile-action">-->
        <!--<span> ￥{{moneyNum}}</span>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <mu-row gutter>
          <mu-col width="100" tablet="50" desktop="45">
            <div class="left">
              <div class="project_status">{{project.taskLevel}}</div>
              <div class="project_icon">图标 icon</div>
            </div>
          </mu-col>
          <mu-col width="100" tablet="50" desktop="55">
            <div class="right">
              <div class="price">￥{{project.taskPrice}}</div>
              <div class="period">项目周期: {{project | dateFormat}}</div>
              <div class="title">
                名称:{{project.taskName}}
                <div class="project_rank"></div>
              </div>
            </div>
          </mu-col>


        </mu-row>

      </router-link>

    </mu-paper>
  </div>
</template>
<script>
  export default {
    name: 'project-card',
    props: {
      project: {
        type: Object,
        default: function () {
          return {
            taskPrice: 1,
            taskState: '正在进行',
            taskCycle: 0,
            taskName: 'ziling',
            pid: '3213213',
            taskLevel: 9
          }
        }
      }
    },
    data () {
      return {}
    },
    components: {},
    methods: {},
    computed: {},
    filters: {

      dateFormat (project) {
        let start = new Date(project.taskCycle)
        let end = new Date(project.taskDeadline)
        console.log(start, end)
        let period = Date.parse(start) - Date.parse(end)
//        console.log(period)
//        let periodY =
//        let periodM =
        let periodD = period / 86400000
//        console.log(periodD)
        return periodD + '天'
      }
    }
  }

</script>
<style scoped lang="less" ref="stylesheet/less">
  @import "../../node_modules/muse-ui/src/styles/import.less";

  .card {
    width: 28rem;
    padding: 1rem
  }

  .left {
    position: relative;
    height: 100%;
    .project_status {
      position: relative;
      top: 0;
      left: 0;
    }
    .project_icon {
      background-color: #000;
      width: 100px;
      height: 100px;
    }
  }

  .right {
    position: relative;
    height: 100%;
    .title {
      height: 100px
    }
    .price {
      font-size: 24px;
      color: @yellow800
    }
    .project_rank {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

</style>
