<template lang='pug'>
  header.header
    h1 {{headerValue}}
</template>

<script>
export default {
  props: {
    headerValue:{
      type: String,
      default: "Header"
    }
  }
}
</script>

<style lang='scss' scoped>
  h1{
    padding: 0; margin: 0
  }
  .header{
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    background-color: black;    
    color: white;
  }    
</style>

