<template>
  <div>
    <section class="hero is-gray">
      <div class="hero-body">
        <div class="container">
          <div class="has-text-centered">
            <p class="highlight-text">Want to know more? Contact us now!</p>
            <p
              class="sub-text"
            >We provide a <strong>Free</strong> consultancy to innovate your business. Just fill the form below to make an appointment and we are good to go!</p>
          </div>

          <div class="form-represent-form-container">
                    <!--Elements-->
                    <div class="form-represent-form-elements-container">
                      <div>
                        <div class="form-represent-form-elements-container-inner">
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
                                       style="color: white;"
                                        :inputType="'text'"
                                        :labelText="'Name'"
                                        :validate="{text: ''}"
                                      />
                                      <div class="general-input-spacing"></div>
                                      <Input
                                        
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
                              <button
                                class="button is-info is-fullwidth is-large contact-button"
                              >Submit</button>

                              <!--Action-->
                            </div>
                          </div>
                          <!--Form input-->
                        </div>
                      </div>
                    </div>
                    <!--Elements-->
                  </div>


        </div>
      </div>
    </section>
  </div>
</template>