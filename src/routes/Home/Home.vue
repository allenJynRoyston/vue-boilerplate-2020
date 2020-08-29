<template lang="pug">
  h1 Allen Royston
</template>

<script>
export default {
  data () {
    const {$store} = this;
    return {
      $store,
    }
  }
}
</script>

<style lang="scss" scoped>
  .columns{
    border: 1px solid red;
  }
</style>
