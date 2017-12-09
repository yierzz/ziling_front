<template>
  <div style="display: flex; justify-content: space-around;width: 100%">
    <img v-for="skill in urls" :src="skill" alt="" style="width: 32px;height: 32px;">
  </div>
</template>
<script>
  import android from '../assets/ANDROID.png'
  import web from '../assets/WEB.png'
  import ios from '../assets/APPLE.png'
  import wechat from '../assets/WECHAT.png'

  export default {
    data () {
      return {
        urls: []
      }
    },
    props: {
      skills: {
        type: Array,
        required: true
      }
    },
    components: {},
    methods: {
      mapSkill (skill) {
        switch (skill) {
          case 'ios': {
            this.urls.push(ios)
            break
          }
          case 'wechat': {
            this.urls.push(wechat)
            break
          }
          case 'web': {
            this.urls.push(web)
            break
          }
          case 'android': {
            this.urls.push(android)
            break
          }

        }
      }
    },
    computed: {},
    created () {
      this.skills.map(item => this.mapSkill(item))
//      console.log(this.skills)
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
