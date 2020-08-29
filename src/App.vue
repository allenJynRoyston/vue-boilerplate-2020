<template lang='pug'>
  #app    
    Header
    router-view
    Footer
</template>

<style lang="scss" scoped>
  /* import global styles */
  @import './assets/css/global.css';
  
  #app{
    min-height: 100vh
  }
</style>
