<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Home from '@/components/Home.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Home,
    Footer,
  }
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
