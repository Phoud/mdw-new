<template>
  <div>
    <section class="hero is-gray">
      <div class="hero-body">
        <div class="container">
          <div class="has-text-centered m-b-50">
            <p class="highlight-text">What we have done</p>
            <p
              class="sub-text"
            >The reason that most businesses trust our service. And you too we will serve the best we can do.</p>
          </div>
          <carousel
           :perPage="1" 
           :navigationEnabled="true"
           :mouseDrag="true"
           :paginationColor="'#031b4e'"
           :paginationActiveColor="'#0069ff'"
           >
            <slide>
                <div class="has-text-centered">
                    <img src="../../assets/carousel1.jpg" alt>
                </div>
            
            </slide>
            <slide>
                <div class="has-text-centered">
              <img src="../../assets/carousel2.jpg" alt>
                </div>
            </slide>
            <slide>
                <div class="has-text-centered">
              <img src="../../assets/carousel3.jpg" alt>
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
  data() {
    return {};
  },
  components: {
    Carousel,
    Slide
  }
};
</script>