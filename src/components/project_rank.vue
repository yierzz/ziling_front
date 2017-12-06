<template>
    <div>
      <img :src="proRank" alt="等级">
    </div>
</template>
<script>
  import A from '../assets/A.png'
  import AP from '../assets/A+.png'
  import B from '../assets/B.png'
  import C from '../assets/C.png'
  import S from '../assets/S.png'
  export default {
    data () {
      return {
        proRank: 'S'
      }
    },
    name: 'project-rank',
    props: ['proLevel'],
    components: {},
    methods: {},
    computed: {},
    mounted () {
      switch (this.proLevel) {
        case 'C': {
          this.proRank = C
          break
        }
        case 'A+': {
          this.proRank = AP
          break
        }
        case 'A': {
          this.proRank = A
          break
        }

        case 'B': {
          this.proRank = B
          break
        }

        case 'S': {
          this.proRank = S
          break
        }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
