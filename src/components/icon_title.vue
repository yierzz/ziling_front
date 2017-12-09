<template>
  <div style="  display: flex;
    height: 27px;
    color: #D8D8D8;
    align-items: center;">
    <mu-icon :value="icon" :size="20"/>
    <h1 style="margin: 0;
      font-family: MicrosoftYaHei-Bold;
      font-size: 16px;
      margin-left: 16px;
      color: #808080;
      letter-spacing: 0;
      line-height: 16px;
      font-weight: bold;">{{title}}</h1>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    name: 'IconTitle',
    props: ['icon', 'title'],
    components: {},
    methods: {},
    computed: {},
    mounted () {}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
