<template lang='pug'>
  .splitbtn-container
    label {{configuation.label}}
    .button-container      
      input(v-model='value' :placeholder='configuation.placeholder' v-bind:class="{ disabled: configuation.busy }" v-on:keyup.enter='onclick' @keyup='() => {onupdate(this.value)}')
      button.submit(:disabled='configuation.busy' v-on:click='onclick')
        span {{configuation.busy ? buttonBusy : buttonActive}}        
</template>

<script>
export default {
  props: {
    configuation: {
      type: Object,
      default: () => {
        return {
          label: 'Input a valid url:',
          placeholder: 'https://www.example.com',
          defaultValue: 'https://www.example.com',
          busy: false
        } 
      }
    },
    buttonActive: {
      type: String,
      default: "Submit"
    },
    buttonBusy:{
      type: String,
      default: "Wait please"
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
    const {defaultValue} = this.$props.configuation
    this.value = defaultValue
    this.onupdate(defaultValue)
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