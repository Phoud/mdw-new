<template>
  <div>
    <section class="hero is-nav-color background">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="feature-text">Software development made easy.</h1>
              <p
                class="sub-feature"
              >We provide a comprehensive software development based in Laos where we can build your modern, accessible and more flexible platform with the price you are willing to pay!</p>
            </div>
            <div class="column">
              <div class="general-from-container is-65">
                <div class="form-represent is-65">
                  <!--Progress bar-->
                  <div
                    class="form-represent-top-border form-represent-top-border-z-index"
                    aria-hidden="true"
                  >
                    <div class="form-represent-top-border-progress is-hide">
                      <div
                        class="form-represent-top-border-progress-img form-represent-top-border-progress-bg-size"
                      ></div>
                      <div class="form-represent-top-border-progress-tran"></div>
                      <div class="form-represent-top-border-progress-tran-anim is-anim">
                        <span class="form-represent-top-border-progress-tran-anim-spot is-anim"></span>
                      </div>
                      <div class="form-represent-top-border-progress-tran-relay-anim is-anim">
                        <span
                          class="form-represent-top-border-progress-tran-anim-spot scale is-anim"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <!-- Progress bar-->
                  <!--Start form login-->
                  <div class="form-represent-form-container">
                    <!--Elements-->
                    <div class="form-represent-form-elements-container">
                      <div>
                        <div class="form-represent-form-elements-container-inner">
                          <!--Header Caption -->
                          <div class="form-represent-form-header-caption">
                            <div class="header-text-centered">
                              <div class="feature-contact">Consult Us Now!</div>
                              <div class="headingSubtext">
                                <content class="get-started">It's Free!</content>
                              </div>
                            </div>
                          </div>
                          <!--Header Caption -->
                          <!--Form input-->
                          <div class="form-represent-form-input">
                            <div class="form-represent-form-input-inner">
                              <!--Input element -->
                              <content>
                                <section class="section-input">
                                  <div class="section-input-container-inner">
                                    <!--Start input-->
                                    <content>
                                      <Input
                                        v-model="name"
                                        :inputType="'text'"
                                        :labelText="'Name'"
                                        :validate="{text: ''}"
                                      />
                                      <div class="general-input-spacing"></div>
                                      <Input
                                        v-model="email"
                                        :inputType="'email'"
                                        :labelText="'Email'"
                                        :validate="{text: ''}"
                                        :showPasswordButton="true"
                                        :autoComplete="'current-password'"
                                      />
                                      <textarea
                                        class="textarea"
                                        v-model="message"
                                        placeholder="Message"
                                      ></textarea>
                                    </content>
                                    <!--End input-->
                                  </div>
                                </section>
                              </content>
                              <!--Input element -->
                              <!--Action-->
                              <button
                                @click="sendContact"
                                class="button is-info is-fullwidth is-large contact-button"
                              >Contact Us</button>

                              <!--Action-->
                            </div>
                          </div>
                          <!--Form input-->
                        </div>
                      </div>
                    </div>
                    <!--Elements-->
                  </div>
                  <!--End form login-->
                  <div class="masked-blur-form"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    sendContact() {
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("message", this.message);
      axios.post("http://localhost:8000/postContact", formData, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        }
      }).then(res =>{
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/background.svg");
  background-size: cover;
}
</style>
