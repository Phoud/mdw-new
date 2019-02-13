<template>
 <div>
   <navbar/>
   
  <router-view/>
   <Footer/>
   <sidebar/>
 </div>
</template>

<script>
import Navbar from './components/partial/Navbar'
import Footer from './components/partial/Footer'
import Sidebar from './components/partial/Sidebar'
export default {
  data(){
    return{

    }
  },
  components:{
    Navbar,
    Footer,
    Sidebar
  }
}
</script>

<style>

</style>
