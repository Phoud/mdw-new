<template>
  <div>
    <section class="hero is-nav-color background">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="feature-text">Increase your product value by modern graphic design</h1>
              <p
                class="sub-feature"
              >We provide a graphic design service for all kind of art works with the modern and luxury design concept.</p>
            </div>
            <div class="column">
              <div>
               <img src="../../../assets/graphic.svg" alt="web">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <contact/>
  </div>
</template>
<script>
import Contact from '../../partial/Contact'
export default {
  components:{
    Contact
  }
}
</script>
<style scoped>
  .background{
    background-image: url('../../../assets/background6.svg');
    background-size: cover;
  }
</style>