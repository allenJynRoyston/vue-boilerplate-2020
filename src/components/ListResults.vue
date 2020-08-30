<template lang='pug'>
  div
    .label-container
      label {{label}} 
      a(v-on:click='onclear') {{clearValue}}
    .list-results                  
      .item(v-for="(value, key) in data")
        .key {{sanitize(key)}}:
        .value(v-on:click='() => {copyToClipboard(value)}') {{value}}
        button.copy-btn(v-on:click='() => {copyToClipboard(value)}') {{buttonValue}}
</template>

<script>
export default {
    props: {
      label:{
        type: String,
        default: "Results:"
      }, 
      clearValue:{
        type: String,
        default: "Clear"
      },   
      buttonValue:{
        type: String,
        default: "Copy"
      },                  
      data: {
        type: Object,
        default: function () {
          return null
        }
      },
      onbuttonclick: {
        type: Function,
        default: () => {}
      },
      onclear: {
        type: Function,
        default: () => {}
      }
    },
    methods: {
      sanitize(str){
        return str.replace(/_/g, " ")
      }, 
      async copyToClipboard(val){
        const {onbuttonclick} = this
        try{
          await navigator.clipboard.writeText(val);
          onbuttonclick({state: true, message: `Copied to clipboard.`})
        } catch(err) {
          onbuttonclick({state: false, message: "Unable to copy to clipboard."})
        }        
      },         
  }
  
}
</script>

<style lang='scss' scoped>
  .list-results{
    display: flex;
    width: calc(100% - 20px);
    flex-direction: column;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 10px 10px 0px 10px;

    .item{
      display: flex;        
      transition: 0.3s;
      
      &:hover{
        color: blue;        
      }

      &:not(:last-child){
        border-bottom: 1px dotted grey;
        margin-bottom: 10px
      }

      .key{
        font-size: 12px;
        text-transform: uppercase;
        font-weight: bold;
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;   
        padding-right: 20px;     
      }

      .value{
        font-size: 12px;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;  
        padding-right: 20px; 
        cursor: pointer;     
      }

      .copy-btn{
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;    
        transition: 0.3s;
        &:hover{
          background: grey;
          color: white;
        }            
      }
    }
  }

  .label-container{
    display: flex;
    justify-content: space-between;

    a{
      font-size: 10px;
      cursor: pointer
    }
  }
</style>