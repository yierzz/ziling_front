<template>
  <div class="avator">
    <img :src="avator"/>
    <!-- <div class="gender">{{gender}}</div> -->
  </div>
</template>
<script>
  import DEFAULT_AVATOR from '../assets/defaultUserlogo.png'

  export default {
    data () {
      return {}
    },
    props: {
      avator: {type: String, default: DEFAULT_AVATOR},
      gender: {type: String, default: '男'}
    },
    components: {},
    methods: {},
    computed: {},
    mounted () {
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .avator {
    width:100px;
    height:100px;
    margin:8px auto;
    // border-radius: 100px;
  }

  .avator img{width:98px;height:98px;border:6px solid #fff;border-radius:98px;}
  .gender {
      position: absolute;
      right: 0;
      bottom: 0;
    }
</style>
