<template>
  <div>
    <img :src="Star1IMG" alt="rank" v-for="i in starInteger">
    <img :src="starDecimal" alt="rank">
  </div>
</template>
<script>
  import Star1IMG from '../assets/star1.png'
  import Star2IMG from '../assets/star0.2.png'
  import Star3IMG from '../assets/star0.4.png'
  import Star4IMG from '../assets/star0.6.png'
  import Star5IMG from '../assets/star0.8.png'

  export default {
    data () {
      return {
        Star1IMG,
        starInteger: 0,
        starDecimal: Star2IMG
      }
    },
    props: {
      rank: {
        type: Number,
        required: true
      }
    },
    mounted () {
      console.log(this.rank)
      let {rank} = this
      while (rank > 1) {
        rank--
        this.starInteger++
      }
      if (rank >= 0.2 && rank <= 0.4) {
        this.starDecimal = Star2IMG
      } else if (rank >= 0.4 && rank <= 0.6) {
        this.starDecimal = Star3IMG
      } else if (rank >= 0.6 && rank <= 0.8) {
        this.starDecimal = Star4IMG
      } else if (rank >= 0.8 && rank < 1) {
        this.starDecimal = Star5IMG

      }
    },
    components: {},
    methods: {},
    computed: {}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
