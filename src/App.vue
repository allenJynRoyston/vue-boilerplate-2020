<template lang='pug' >
  #app
    Header(:data={value: "Url Shortening Demo!"})
    router-view
    Footer
</template>

<script>
import 'regenerator-runtime/runtime' // allows for async/await 
import {Header, Footer} from './components/_index'

export default {
  components: {
    Header, 
    Footer    
  }
}
</script>


<style lang='scss' scoped>
  @import './assets/css/global.css';
</style>