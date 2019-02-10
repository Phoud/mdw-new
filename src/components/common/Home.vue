<template>
 <div>
   <Main/>
   <customers/>
   <highlight/>
   <Portfolio/>

 </div>
</template>

<script>

import Main from '../partial/Main'
import Customers from '../partial/Customer'
import Highlight from '../partial/Highlight'
import Portfolio from '../partial/Portfolio'

export default {
  data(){
    return{

    }
  },
  components:{
    Main,
    Customers,
    Highlight,
    Portfolio
  }
}
</script>

<style>

</style>