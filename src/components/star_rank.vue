<template>
  <div>
    <img :src="Star1IMG" alt="rank" v-for="i in rank">
  </div>
</template>
<script>
  import Star1IMG from '../assets/star1.png'

  export default {
    data () {
      return {
        Star1IMG
      }
    },
    props: {
      rank: {
        type: Number,
        required: true
      }
    },
    components: {},
    methods: {},
    computed: {
    },
    mounted () {
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
