<template lang="pug"> 
  .home-container    
    SplitInput(:label='configuration.label' :placeholder='configuration.placeholder' :defaultVal='configuration.defaultValue' :busy='configuration.busy' :onclick='submitUrl' :onupdate='inputUpdate')     
    ListResults(v-if='!!result' :data='result' :onbuttonclick='showCopySplash' :onclear='clearResults')
    
    section(v-if='!configuration.busy')
      .error-container
        p.error(v-if='error.state') {{error.reason}}
        a.error(v-if='error.state' href='https://api.shrtco.de/v2/shorten?url=https://www.google.com' target='_blank') Click here to check if the service is down.
      .options-container(v-if='error.allowForce')
        a.showmore(v-on:click='forceResults') Ugh fine, show me some dummy data then.
</template>

<script>
import axios from 'axios';

export default {
  data () {    
    return {
      configuration: {
        label: 'Input a valid url:',
        placeholder: 'https://www.google.com',
        defaultValue: 'https://www.google.com',
        busy: false
      },
      error: {
        state: false,
        reason: null,
        allowForce: false
      },
      url: '',
      result: null
    }
  },
  methods: {
    setError({state, reason, allowForce = false}){
      this.error = {
        state, 
        reason,
        allowForce
      }      
    },
    clearResults(){
      this.result = null
    },
    inputUpdate(val) {
      this.url = val
    },
    validateUrl(url) {
      const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
      return regexp.test(url);        
    },
    showCopySplash({message}){
      alert(message)           
    },
    setBusy(state){
      this.configuration.busy = state
    },
    async submitUrl() {
      const {configuration, url, validateUrl, setBusy, setError} = this      

      if(!configuration.busy){
        // check if url is valid
        if(url.length < 6 || !validateUrl(url)){
          setError({state: true, reason: 'Must be a valid url'})             
          this.result = null           
        }
        // if it is
        else{
          setBusy(true)
          try{
            const {data} = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
            const {ok, result = null} = data                  
            // set error state (if applicable)
            setError(ok ? {state: false, reason: null} : {state: true, reason: 'Problem with url - please try again later'})                
            // bind results
            this.result = result          
          } catch (err) {
            // if service is down, allow force option
            setError({state: true, reason: 'Problem with service - please try again later.', allowForce: true})        
          }
          setBusy(false)   
        }
      }

    },
    forceResults(){
      // available if service is down, for demo purposes
      this.result = {
        code: "M7Wdj",
        short_link: "shrtco.de\/M7Wdj",
        full_short_link: "https:\/\/shrtco.de\/M7Wdj",
        short_link2: "9qr.de\/M7Wdj",
        full_short_link2: "https:\/\/9qr.de\/M7Wdj",
        share_link: "shrtco.de\/share\/M7Wdj",
        full_share_link: "https:\/\/shrtco.de\/share\/M7Wdj",
        original_link: "https:\/\/www.google.com"
      }
      this.setError({state: false, reason: null})                      
    },    
  }
}
</script>

<style lang="scss" scoped>
  .home-container{
    display: flex;    
    flex-direction: column;
    margin: auto;
    min-height: 100vh;
    max-width: calc(1200px - 200px);
    padding: 50px 100px;    
  }

  .error-container, .options-container{    
    display: flex;
    justify-content: space-between;
  }

  .error{
    font-size: 10px;
    color: red
  }

  .showmore{
    font-size: 10px;
    color: teal;
    cursor: pointer
  }

  p, a{
    padding: 0;
    margin: 0
  }
</style>
