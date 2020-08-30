<template lang='pug' >
  #app
    Header(:headerValue='"Url Shortening Demo"')
    router-view
    Footer
</template>

<script>
  import 'regenerator-runtime/runtime' // allows for async/await 
</script>

<style lang='scss' scoped>
  @import './assets/css/global.css';
</style>