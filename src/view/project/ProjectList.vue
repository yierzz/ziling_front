<template>
  <div>
    <search-bar :filters="filters"></search-bar>
    <div>按搜索共有21个项目正在寻找人才</div>
    <div class="container">

      <projcard v-for="(project, index) in projectList" :project="project" :key="`index-project-${index}`"></projcard>

      <!--<project-card v-for="(proj, index) in projList" :project_title="proj.title" :index="index" :key="index"-->
      <!--:project_duration="proj.duration" :moneyNum="proj.moneyNum" :img="proj.img"-->
      <!--class="proj_item"></project-card>-->
    </div>
  </div>
</template>
<script>
  import SearchBar from '../../components/search_bar.vue'
  import ProjectCard from '../../components/project_card.vue'
  // import DEFAULTIMG from '../../assets/default1.png'

  import API from '../../api'

  export default {
    data () {
      return {
        filters: ['技术筛选', '职务范围', '薪资范围', '项目等级'],
        pageNum: 15,
        currentPage: 1,
        projectList: []
      }
    },
    components: {
      'search-bar': SearchBar,
      'projcard': ProjectCard
    },
    methods: {
      /**
       * filter 0:无筛选 1:技术筛选 2:职务筛选 3:薪资范围筛选 4:项目等级筛选
       * @param filter
       */
      searchProject (filter = 0) {
        console.log('fdsafasdf')
        API('searchProject', {
          filter,
          currentPage: this.currentPage,
          pageNum: this.pageNum
        }).then(res => {
          this.projectList = res.taskList.list
        })
      }
    },
    computed: {},
    mounted () {
      this.searchProject()
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    .proj_item {
      margin: 5px 20px 5px 20px;
      width: 25%;
      height: 200px;
    }
  }
</style>
