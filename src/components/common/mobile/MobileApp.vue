<template>
  <div>
    <section class="hero is-nav-color background">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="feature-text">Move your business to the next level by building your own mobile app with us</h1>
              <p
                class="sub-feature"
              >Build your Android and iOS applications with us with the afforable price to reach more customers and make everything easy for you.</p>
            </div>
            <div class="column">
              <div>
                <img src="../../../assets/mobile.svg" alt="App">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <type-of-app/>
    <contact/>
  </div>
</template>
<script>
import TypeOfApp from './TypeOfApp'
import Contact from '../../partial/Contact'
export default {
  data(){
    return{

    }
  },
  components:{
    TypeOfApp,
    Contact
  }
}
</script>
<style scoped>
.background {
  background-image: url("../../../assets/background.svg");
  background-size: cover;
}
</style>