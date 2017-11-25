<template>
  <div>
    <banner></banner>
    <div class="title_container">
      <div class="left">
        <mu-icon value="star_rate" :size="20"/>
        <span>推荐任务</span>
        <div>RECOMMENDATION</div>
      </div>
      <div class="right">
        <router-link to="/projects">查看更多</router-link>
        <mu-icon value="keyboard_arrow_right" :size="20"/>
      </div>

    </div>

    <div class="container">

      <loading-bar v-if="!projectList"></loading-bar>
      <projcard v-for="(project, index) in projectList" :project="project" :key="`index-project-${index}`"></projcard>
    </div>
    <div style="display: flex; justify-content: center">
    </div>

    <div class="title_container">
      <div class="left">
        <mu-icon value="face" :size="20"/>
        <span>人气紫领</span>
        <div>POPULAR ZLING</div>
      </div>
      <div class="right">
        <router-link to="/recruit">查看更多</router-link>
        <mu-icon value="keyboard_arrow_right" :size="20"/>
      </div>
    </div>

    <div class="container">
      <loading-bar v-if="!projectList"></loading-bar>
      <user-card v-for="(user, index) in starEmployee" :key="`index-superstar-${index}`" :userProfile="user"/>
    </div>
    </div>
</template>
<script>
  import API from 'api'
  import Banner from './Banner'
  import projectCard from '../../components/project_card'
  // import DEFAULTIMG from '../../assets/default1.png'
  import UserCard from 'components/user_card'
  import LoadingBar from 'components/loading'

  export default {
    data () {
      return {
        userList: [{}, {}, {}, {}, {}, {}],
        projectList: null,
        starEmployee: null,
        all_show: true,
        web_show: false,
        android_show: false,
        ios_show: false,
        wx_show: false
      }
    },
    components: {
      'banner': Banner,
      'projcard': projectCard,
      'user-card': UserCard,
      LoadingBar
    },
    methods: {},
    computed: {},
    mounted () {
      API('getIndexData').then(data => {
        // console.log(data)
        this.projectList = data.recommend
        this.starEmployee = data.userStar
      })
    },
    filter: {
      isEmpty (value) {
        if (value) {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .title_container {
    color: #808080;;

    display: flex;
    align-items: center;
    height: 30px;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 25px;
    .left {
      display: flex;
      align-items: center;

      i {
        height: 30px;
        width: 30px;
      }
      span {
        font-family: MicrosoftYaHei-Bold;
        font-size: 16px;
        color: #808080;
        letter-spacing: 0;
        line-height: 30px;
        margin-left: 15px;
        font-weight: bold;
        margin-right: 10px;
      }
      div {
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #808080;
        letter-spacing: 0;
        line-height: 30px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      a {
        color: #808080;;

      }
    }

  }

  .action_button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 500px;
    height: 50px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
</style>
