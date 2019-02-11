<template>
  <div>
    <section class="hero is-nav-color background">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="feature-text">Fast and Reliable maintenance service. Your software is like ours.</h1>
              <p
                class="sub-feature"
              >We treat your software like our software with a reasonable price that you are willing to pay.</p>
            </div>
            <div class="column">
              <div>
               <img src="../../../assets/maintenance.svg" alt="maintenance">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <type-of-maintenance/>
    <contact/>
  </div>
</template>
<script>
import TypeOfMaintenance from './TypeOfMaintenance'
import Contact from '../../partial/Contact'
export default {
  data(){
    return{

    }
  },
  components:{
    TypeOfMaintenance,
    Contact
  }
}
</script>
<style scoped>
  .background{
    background-image: url('../../../assets/background.svg');
    background-size: cover;
  }
</style>