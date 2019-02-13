<template>
  <div>
    <section class="hero is-gray">
      <div class="hero-body">
        <div class="container">
          <div class="has-text-centered m-b-50">
            <p class="customer-text">BUSINESSES THAT TRUST MEKONG DIGITAL WORKS</p>
          </div>

          <carousel
            :perPage="1"
            :navigationEnabled="true"
            :mouseDrag="true"
            :paginationColor="'#031b4e'"
            :paginationActiveColor="'#0069ff'"
          >
            <slide>
              <div class="columns is-multiline is-mobile is-desktop is-tablet">
                <div class="column is-6-mobile is-2-desktop is-6-tablet">
                  <div class="customer-div">
                    <img class="customer-image" src="../../assets/logo.svg" alt>
                  </div>
                </div> 

                <div class="column is-6-mobile is-2-desktop is-6-tablet">
                  <div class="customer-div">
                    <img class="customer-image" src="../../assets/jaol.png" alt>
                  </div>
                </div>

                <div class="column is-6-mobile is-2-desktop is-6-tablet">
                  <div class="customer-div">
                    <img class="customer-image" src="../../assets/jobjibjib.jpg" alt>
                  </div>
                </div>
                <div class="column is-6-mobile is-2-desktop is-6-tablet">
                  <div class="customer-div">
                    <img class="customer-image" src="../../assets/pmi.png" alt>
                  </div>
                </div>
                <div class="column is-6-mobile is-2-desktop is-6-tablet">
                  <div class="customer-div">
                    <img class="customer-image" src="../../assets/108service.jpg" alt>
                  </div>
                </div>
                <div class="column is-6-mobile is-2-desktop is-6-tablet">
                  <div class="customer-div">
                    <img class="customer-image" src="../../assets/spoon.png" alt>
                  </div>
                </div>
              </div>
            </slide>
            <slide>
              <div class="columns is-multiline is-mobile is-desktop is-tablet">
                <div class="column is-6-mobile is-2-desktop is-6-tablet">
                  <div class="customer-div">
                    <img class="customer-image" src="../../assets/logo.svg" alt>
                  </div>
                </div>

                <div class="column is-6-mobile is-2-desktop is-6-tablet">
                  <div class="customer-div">
                    <img class="customer-image" src="../../assets/laoffer.jpg" alt>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide
  }
};
</script>