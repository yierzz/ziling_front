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
    background: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    position: relative;
    > img {
      width: 88px;
      height: 88px;
    }
    .gender {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
</style>
