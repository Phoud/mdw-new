<template>
  <div>
    <section class="hero is-nav-color background">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="feature-text">Let's these works define our good works!</h1>
              <p
                class="sub-feature"
              >We have done quite many projects for both busineses and organizations. They trust us and you too!</p>
            </div>
            <div class="column">
              <div>
               <img src="../../../assets/portfolio.svg" alt="web">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <portfolio-area/>
    <contact/>
  </div>
</template>
<script>
import Contact from '../../partial/Contact'
import PortfolioArea from './PortfolioArea'
export default {
  components:{
    Contact,
    PortfolioArea
  }
}
</script>
<style scoped>
  .background{
    background-image: url('../../../assets/background.svg');
    background-size: cover;
  }
</style>