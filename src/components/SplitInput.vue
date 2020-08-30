<template lang='pug'>
  .splitbtn-container
    label {{label}}
    .button-container
      input(v-model='value' :placeholder='placeholder' v-bind:class="{ disabled: busy }" v-on:keyup.enter='onclick' @keyup='() => {onupdate(this.value)}')
      button.submit(:disabled='busy' v-on:click='onclick')
        span {{busy ? buttonBusy : buttonActive}}        
</template>

<script>
export default {
  props: {
    buttonActive: {
      type: String,
      default: "Submit"
    },
    buttonBusy:{
      type: String,
      default: "Wait please"
    },
    label: {
      type: String, 
      default: "Enter a value"
    },    
    defaultVal: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String, 
      default: ""
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
  .splitbtn-container{
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
    transform: translateY(0px);
    transition: 0.3s;
    width: 200px;

    &:hover{
      background: grey;
      color: white;
    }       

    &:disabled{
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
</style>