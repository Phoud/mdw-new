<template>
 <div>
   <navbar/>
  <router-view/>
   <Footer/>
 </div>
</template>

<script>
import Navbar from './components/partial/Navbar'
import Footer from './components/partial/Footer'
export default {
  data(){
    return{

    }
  },
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
