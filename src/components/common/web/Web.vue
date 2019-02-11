<template>
  <div>
    <section class="hero is-nav-color background">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="feature-text">All kind of websites with latest technologies</h1>
              <p
                class="sub-feature"
              >Latest technologies and modern design have been applied to our every development to make your website modern, friendly, fast and accessible in order to reach your customers and prospects.</p>
            <div class="web-button">
              <a class="button is-info is-inverted is-outlined is-large">See our portfolios</a>
            </div>
            
            </div>
            <div class="column">
              <div>
               <img src="../../../assets/web.svg" alt="web">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <type-of-web/>
    <contact/>
  </div>
</template>
<style scoped>
  .background{
    background-image: url('../../../assets/background.svg');
    background-size: cover;
  }
</style>
<script>
import TypeOfWeb from './TypeOfWeb'
import Contact from '../../partial/Contact'
export default {
  data(){
    return{

    }
  },
  components:{
    TypeOfWeb,
    Contact
  }
}
</script>