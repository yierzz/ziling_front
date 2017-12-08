<template>

<div>
  <!--  <div style="display: flex; justify-content: space-between">
      <mu-flat-button v-for="(filter, index) in filters" :label="filter" backgroundColor="grey" :key="index" @click="search(index)"/>
     <div>-->
  <mu-raised-button class="pop_duty" label="职务筛选" ref="button1" @click="toggle1" insert toggleNested/>
  <mu-popover :open="open1" :autoPosition="false" :trigger="trigger1" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" @close="handleClose" popoverClass="duty">
    <mu-menu>
      <mu-menu-item title="职务1" />
      <mu-menu-item title="职务2" />
      <mu-menu-item title="职务3" />
    </mu-menu>
  </mu-popover>
  <mu-raised-button class="pop_skill" label="技能筛选" ref="button2" @click="toggle2" />
  <mu-popover :open="open2" :autoPosition="false" :trigger="trigger2" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" @close="handleClose">
    <mu-menu>
      <mu-menu-item title="技能1" />
      <mu-menu-item title="技能2" />
      <mu-menu-item title="技能3" />
    </mu-menu>
  </mu-popover>
  <mu-raised-button class="pop_qualify" label="资质认证筛选" ref="button3" @click="toggle3"/>
  <mu-popover :open="open3" :autoPosition="false" :trigger="trigger3" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" @close="handleClose">
    <mu-menu>
      <mu-menu-item title="认证1" />
      <mu-menu-item title="认证2" />
      <mu-menu-item title="认证3" />
    </mu-menu>
  </mu-popover>
  <mu-text-field hintText="搜索用户名、技术术语"/>
  <mu-raised-button class="search_but" label="搜索" primary/>
</div>
</template>
<script>

  export default {
    data () {
      return {
        open1: false,
        open2: false,
        open3: false,
        trigger1: null,
        trigger2: null,
        trigger3: null
      }
    },
    props: {
      filters: {
        type: Array,
        default: () => {
          return ['筛选条件1', '筛选条件2']
        }
      },
      search: {
        type: Function,
        default: () => {}
      }
    },
    components: {},
    methods: {
      toggle1 () {
        this.open1 = !this.open1
      },
      toggle2 () {
        this.open2 = !this.open2
      },
      toggle3 () {
        this.open3 = !this.open3
      },
      handleClose1 () {
        this.open1 = false
      },
      handleClose2 () {
        this.open2 = false
      },
      handleClose3 () {
        this.open3 = false
      },
      stringify (obj) {
        return JSON.stringify(obj)
      }
    },
    computed: {},
    mounted () {
      this.trigger1 = this.$refs.button1.$el
      this.trigger2 = this.$refs.button2.$el
      this.trigger3 = this.$refs.button3.$el
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .pop_duty {
    margin-left: 190px;
    margin-right: 40px;
    border-radius: 20px;
  }
  .pop_skill {
    margin-right: 40px;
    border-radius: 20px;
  }
 .pop_qualify {
    margin-right: 40px;
    border-radius: 20px;
  }
  .search_but {
    margin-left: 40px;
    border-radius: 20px;
    background: #9013FE;
  }


</style>
