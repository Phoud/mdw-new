<template>
  <div class="section">
    <div class="container">
      <div class="has-text-centered">
        <p
          class="highlight-text"
        >Reliable, Fast, latest technologies and reasonable price are factors that most busineses trust us.</p>
        <p class="sub-text">Find out more who our customers are and what they say about us.</p>
      </div>
      <carousel
        :perPage="1"
        :navigationEnabled="true"
        :mouseDrag="true"
        :paginationColor="'#031b4e'"
        :paginationActiveColor="'#0069ff'"
      >
        <slide v-for="(info, index) in data" :key="index">
          <div class="columns is-mobile company-area is-multiline is-desktop is-tablet">
            <div class="column is-12-mobile">
              <div class="has-text-centered">
                <img class="company-image" :src="info.image" alt="Company image">
              </div>
            </div>
            <div class="column is-12-mobile">
              <p class="company-title">{{ info.name }}</p>
              <div class="company-description">
                <p class="company-text">{{ info.description }}</p>
                <a class="button is-link is-outlined is-seemore">See more</a>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import img1 from "../../../assets/logo.svg";
import img2 from '../../../assets/jaol.png';
import img3 from "../../../assets/pmi.png";
import img4 from '../../../assets/spoon.png';
import img5 from "../../../assets/jobjibjib.jpg";
import img6 from '../../../assets/108service.jpg';
import img7 from '../../../assets/laoffer.jpg';
import img8 from '../../../assets/royal.jpg';
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
      data: [
        {
          image: img1,
          name: "108-1009 Group.,ltd",
          description:
            "108-1009 Group is a recruiting and Media Company based in Vientiane Capital, Laos."
        },
        {
          image: img2,
          name: "108-1009 Group.,ltd",
          description:
            "108-1009 Group is a recruiting and Media Company based in Vientiane Capital, Laos."
        },
        {
          image: img3,
          name: "108-1009 Group.,ltd",
          description:
            "108-1009 Group is a recruiting and Media Company based in Vientiane Capital, Laos."
        },
        {
          image: img4,
          name: "108-1009 Group.,ltd",
          description:
            "108-1009 Group is a recruiting and Media Company based in Vientiane Capital, Laos."
        },
        {
          image: img5,
          name: "108-1009 Group.,ltd",
          description:
            "108-1009 Group is a recruiting and Media Company based in Vientiane Capital, Laos."
        },
        {
          image: img6,
          name: "108-1009 Group.,ltd",
          description:
            "108-1009 Group is a recruiting and Media Company based in Vientiane Capital, Laos."
        },
        {
          image: img7,
          name: "108-1009 Group.,ltd",
          description:
            "108-1009 Group is a recruiting and Media Company based in Vientiane Capital, Laos."
        },
        {
          image: img8,
          name: "108-1009 Group.,ltd",
          description:
            "108-1009 Group is a recruiting and Media Company based in Vientiane Capital, Laos."
        }
      ]
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>
<style>
.company-area {
  margin-top: 80px;
}
.company-title {
  font-size: 18px;
  color: #010e28;
  font-weight: bold;
}
.company-description {
  margin-top: 25px;
}
.company-text {
  font-size: 20px;
}
.is-seemore {
  margin-top: 15px;
}
.company-image{
    width: 450px;
    height: 310px;
}
</style>