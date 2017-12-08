<template>
  <div class="avator">
      <img :src="avator" class="portrait"/>
      <img :src="gender == 'male'? MALE:FEMALE" class="gender"/>
    <!-- <div class="gender">{{gender}}</div> -->
  </div>
</template>
<script>
  import DEFAULT_AVATOR from '../assets/defaultUserlogo.png'
  import MALE from '../assets/A+.png'
  import FEMALE from '../assets/B.png'

  export default {
    data () {
      return {
        MALE,
        FEMALE
      }
    },
    props: {
      avator: {type: String, default: DEFAULT_AVATOR},
      gender: {type: String, default: 'male'}
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
    background:white;
    display: flex;
    justify-content: center;
    height:88px;

    .portrait{
    width: 88px;
    height: 88px;
    top: -50%;
    position: relative;
  }

  .gender {
    width:32px;
    height:32px;
    position:relative;
    top:13px;
    right:32px;
    z-index:2;
    }
  }
  
</style>
