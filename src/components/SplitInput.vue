<template lang='pug'>
  .container
    label {{label}}
    .button-container
      input(v-model='value' :placeholder='placeholder' v-bind:class="{ disabled: busy }" @keyup='() => {onupdate(this.value)}')
      button.submit(:disabled='busy' v-on:click='onclick')
        span(v-if='busy') Wait please
        span(v-else) Submit
</template>

<script>
export default {
  props: {
    defaultVal: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String, 
      default: ""
    },
    label: {
      type: String, 
      default: "Enter a value"
    },
    busy: {
      type: Boolean,
      default: false
    },
    onclick: {
      type: Function,
      default: () => {}
    },
    onupdate: {
      type: Function,
      default: () => {}
    }
  },  
  data () {    
    return {
      value: null,
    }
  },
  created: function(){
    const {defaultVal} = this.$props
    this.value = defaultVal
    this.onupdate(defaultVal)
  }
}
</script>

<style lang='scss' scoped>
  .container{
    display: inline-block;
    width: 100%;
  }

  .button-container{
    display: flex;
  }

  input{
    width: 100%;
    height: 32px; 
    margin-right: 10px; 

    &::placeholder{
      opacity: 0.5
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.5
    }
  }

  button{
    border-radius: 0;
    transform: translateY(-1px);

    &:disabled{
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
</style>