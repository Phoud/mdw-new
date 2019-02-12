<template>
  <div>
    <section class="hero is-nav-color background">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="feature-text">These busineses and organizations trust us. And you too!</h1>
              <p
                class="sub-feature"
              >These busineses and organizations trust us and still continually use our services.</p>
            </div>
            <div class="column">
              <div>
               <img src="../../../assets/customer.svg" alt="web">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <customer-area/>
    <contact/>
  </div>
</template>
<script>
import Contact from '../../partial/Contact'
import CustomerArea from './CustomerArea'
export default {
  components:{
    Contact,
    CustomerArea
  }
}
</script>
<style scoped>
  .background{
    background-image: url('../../../assets/background.svg');
    background-size: cover;
  }
</style>