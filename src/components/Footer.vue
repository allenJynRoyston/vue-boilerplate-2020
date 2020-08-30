<template lang='pug'>
  footer.footer
    span Allen Royston ❤️ 
      a(href="https://www.github.com/allenRoyston" target="_blank") visit my Github!
</template>

<style lang='scss' scoped>
  .footer{
    text-transform: uppercase;
    font-size: 12px;
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    background-color: black;    
    color: white;

    a{
      color: white;
      text-decoration: none;
    }
  }    
</style>