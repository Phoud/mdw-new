<template>
  <div>
    <section class="hero is-nav-color background">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="feature-text">Computer Software made easy</h1>
              <p
                class="sub-feature"
              >We develop all kind of Computer Software running on Windows Operating System along with your business need.</p>
            </div>
            <div class="column">
              <div>
               <img src="../../../assets/windows1.svg" alt="web">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <type-of-windwos-app/>
    <contact/>
  </div>
</template>

<script>
import TypeOfWindwosApp from './TypeOfWindwsApp'
import Contact from '../../partial/Contact'
export default {
  data(){
    return{

    }
  },
  components:{
    TypeOfWindwosApp,
    Contact
  }
}
</script>

<style scoped>
  .background{
    background-image: url('../../../assets/background2.svg');
    background-size: cover;
  }
</style>