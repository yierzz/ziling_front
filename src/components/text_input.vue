<template>
  <input v-model="value" :placeholder="hintText" style="margin: 0;padding-left:15px; width: 0px; height: 30px; background: #F5F5F5; border-radius: 15px; font-size: 12px; font-family: MicrosoftYaHei; border: none;"/>
</template>
<script>
  export default {
    data () {
      return {}
    },
    name: 'TextInput',
    props: ['value', 'hintText', 'margin', 'width', 'height', 'padding-left', 'background', 'border-radius', 'font-family', 'font-size', 'border'],
    components: {},
    methods: {},
    computed: {},
    mounted () {}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
