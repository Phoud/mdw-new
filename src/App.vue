<template>
 <div>
   <navbar/>
   <Main/>
   <customers/>
   <highlight/>
   <Portfolio/>
   <Footer/>
 </div>
</template>

<script>
import Navbar from './components/partial/Navbar'
import Main from './components/partial/Main'
import Customers from './components/partial/Customer'
import Highlight from './components/partial/Highlight'
import Portfolio from './components/partial/Portfolio'

import Footer from './components/partial/Footer'
export default {
  data(){
    return{

    }
  },
  components:{
    Navbar,
    Main,
    Customers,
    Highlight,
    Portfolio,
    Footer
  }
}
</script>

<style>

</style>
