<template lang='pug'>
  div
    .label-container
      label Results: 
      a(v-on:click='onclear') Clear
    .list-results                  
      .item(v-for="(value, key) in data")
        .key {{sanitize(key)}}:
        .value {{value}}
        button.copy-btn(v-on:click='() => {copyToClipboard(value)}') Copy
</template>

<script>
export default {
    props: {
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
      copyToClipboard(val){
        const {onbuttonclick} = this
        navigator.clipboard.writeText(val).then(() => {
          onbuttonclick({state: true, message: `Copied to clipboard.`})
        }, (err) => {
          onbuttonclick({state: false, message: "Unable to copy to clipboard."})
        });
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
      }

      .copy-btn{
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;        
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