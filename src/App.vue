<template>
  <div id="app" style="background-color: #fff; width: 100%;padding-bottom: 10px; min-height: 100vh">
    <div style="box-shadow: 0 3px 10px rgba(0,0,0,.156863);">
      <app-header></app-header>
    </div>

    <div id="body">
      <fs-loading v-if="loading"></fs-loading>
      <router-view default v-else="loading"></router-view>
      <app-footer></app-footer>

    </div>
  </div>
</template>

<script>
  import AppHeader from 'view/header'
  import { mapState } from 'vuex'
  import AppFooter from './components/footer'
  import FullSreenLoading from './components/fullsreen_loading.vue'

  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {},
    components: {
      'app-footer': AppFooter,
      'app-header': AppHeader,
      'fs-loading': FullSreenLoading
    },
    computed: {
      ...mapState({
        loginTag: (state) => state.user.loginTag,
        loading: (state) => state.app.loading
      })
    },
    created: function () {
      //  console.log(this.$store.state.user.loginTag)
    }
  }
</script>

<style lang="scss">
  @import 'styles/normalize.css';

  #body {
    width:1200px;
    padding: 0 0rem;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    #body {
      width: 100%;
      padding: 0;
      margin: 0;
    }
  }
</style>
