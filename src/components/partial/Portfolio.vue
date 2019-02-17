<template>
  <div>
    <section class="hero is-gray">
      <div class="hero-body">
        <div class="container">
          <div class="has-text-centered m-b-50">
            <p class="highlight-text">What we have done.</p>
            <p
              class="sub-text"
            >Here are some of our works we have done so far. Most of our customers trust us and you too.</p>
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
                  <a href="https://108.jobs/" target="_blank">
                    <img src="../../assets/portfolio/108job.png" alt>
                  </a>
                    
                </div>
            
            </slide>
            <slide>
                <div class="has-text-centered">
                  <a href="http://pmimfi.com/" target="_blank">
              <img src="../../assets/portfolio/pmi.png" alt>
                  </a>
                </div>
            </slide>
            <slide>
                <div class="has-text-centered">
                  <a href="http://108service.la/" target="_blank">
              <img src="../../assets/portfolio/108service.png" alt>
                  </a>
                </div>
            </slide>
            <slide>
                <div class="has-text-centered">
                  <a href="http://www.spoon.la/" target="_blank">
              <img src="../../assets/portfolio/spoon.png" alt>
                  </a>
                </div>
            </slide>
            <slide>
                <div class="has-text-centered">
                  <a href="http://bizhub.la/" target="_blank">
              <img src="../../assets/portfolio/bizhub.png" alt>
                  </a>
                </div>
            </slide>

            <slide>
                <div class="has-text-centered">
                  <a href="http://www.jobjibjib.la/" target="_blank">
              <img src="../../assets/portfolio/jibjib.png" alt>
                  </a>
                </div>
            </slide>
            <slide>
                <div class="has-text-centered">
                  <a href="https://laoffer.la/" target="_blank">
              <img src="../../assets/portfolio/laoffer.png" alt>
                  </a>
                </div>
            </slide>
            <slide>
                <div class="has-text-centered">
                  <a href="http://www.royalexpress.la/" target="_blank">
              <img src="../../assets/portfolio/royal.png" alt>
                  </a>
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