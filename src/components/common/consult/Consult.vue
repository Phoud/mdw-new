<template>
  <div>
    <section class="hero is-nav-color background">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="feature-text">Do you want to innovate your business or adopt new technologies?</h1>
              <p
                class="sub-feature"
              >You come the right place! Mekong Digital Works provides a <strong style="color: white; font-size: 20px;">Free</strong> consultancy on innovation and technologies adoption.</p>
            </div>
            <div class="column">
              <div>
               <img src="../../../assets/consult.svg" alt="consult">
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
    background-image: url('../../../assets/background.svg');
    background-size: cover;
  }
</style>