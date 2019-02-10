<template>
  <div>
    <section class="hero is-nav-color background">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="feature-text">The simplest cloud platform for developers & teams</h1>
              <p
                class="sub-feature"
              >Deploy, manage, and scale cloud applications faster and more efficiently on DigitalOcean. We make managing infrastructure easy for teams and businesses, whether you’re running one virtual machine or ten thousand.</p>
            </div>
            <div class="column">
              <div class="general-from-container is-65">
                <div class="form-represent is-65">
                  <!--Progress bar-->
                  <div
                    class="form-represent-top-border form-represent-top-border-z-index"
                    aria-hidden="true"
                  >
                    <div
                      class="form-represent-top-border-progress is-hide"
                    >
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
                              <div class="feature-contact">
                                Consult Us Now!
                              </div>
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
                                        v-model="user.email"
                                        :inputType="'text'"
                                        :labelText="'Name'"
                                        :validate="{text: ''}"
                                      />
                                      <div class="general-input-spacing"></div>
                                      <Input
                                    
                                        v-model="user.password"
                                        :inputType="'email'"
                                        :labelText="'Email'"
                                        :validate="{text: ''}"
                                        :showPasswordButton="true"
                                        :autoComplete="'current-password'"
                                      />
                                      <textarea class="textarea" placeholder="Message"></textarea>
                                    </content>
                                    <!--End input-->
                                  </div>
                                </section>
                              </content>
                              <!--Input element -->
                              <!--Action-->

                            
                                  
                                  <button class="button is-info is-fullwidth is-large contact-button">Contact Us</button>

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
                user: {}
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
  .background{
    background-image: url('../../assets/background.svg');
    background-size: cover;
  }
</style>
