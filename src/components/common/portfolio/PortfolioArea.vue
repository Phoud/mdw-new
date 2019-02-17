<template>
  <div class="section">
    <div class="container">
      <div class="has-text-centered">
        <p class="highlight-text">Here are all works we have done.</p>
        <p
          class="sub-text"
        >You can find our works we have done by clicking on the images below.</p>
      </div>
      <div class="columns is-mobile highlight-icon is-multiline is-desktop is-tablet">
        <div class="column is-4-desktop is-12-moblie is-6-tablet">
          <div class="image-container">
            <img class="image" src="../../../assets/portfolio/108job.png" alt>
            <a href="https://108.jobs/" target="_blank">
              <div class="after has-text-centered">
                <div class="view">
                  <p class="view-text">108jobs</p>
                  <hr class="hr">
                  <p class="view-text" href="#">View</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="column is-4-desktop is-12-mobile is-6-tablet">
          <div class="image-container">
            <img class="image" src="../../../assets/portfolio/pmi.png" alt>
            <a href="http://pmimfi.com/" target="_blank">
              <div class="after has-text-centered">
                <div class="view">
                  <p class="view-text">Phetoulay Microfinance Institution</p>
                  <hr class="hr">
                  <p class="view-text" href="#">View</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="column is-4-desktop is-12-mobile is-6-tablet">
          <div class="image-container">
            <img class="image" src="../../../assets/portfolio/108service.png">
            <a href="http://108service.la/" target="_blank">
              <div class="after has-text-centered">
                <div class="view">
                  <p class="view-text">108 Service</p>
                  <hr class="hr">
                  <p class="view-text" href="#">View</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="column is-4-desktop is-12-mobile is-6-tablet">
          <div class="image-container">
            <img class="image" src="../../../assets/portfolio/spoon.png">
            <a href="http://www.spoon.la/" target="_blank">
              <div class="after has-text-centered">
                <div class="view">
                  <p class="view-text">Spoon</p>
                  <hr class="hr">
                  <p class="view-text" href="#">View</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="column is-4-desktop is-12-mobile is-6-tablet">
          <div class="image-container">
            <img class="image" src="../../../assets/portfolio/bizhub.png">
            <a href="http://bizhub.la/" target="_blank">
              <div class="after has-text-centered">
                <div class="view">
                  <p class="view-text">Bizhub</p>
                  <hr class="hr">
                  <p class="view-text" href="#">View</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="column is-4-desktop is-12-mobile is-6-tablet">
          <div class="image-container">
            <img class="image" src="../../../assets/portfolio/jibjib.png">
            <a href="http://www.jobjibjib.la/" target="_blank">
              <div class="after has-text-centered">
                <div class="view">
                  <p class="view-text">Jobjibjib</p>
                  <hr class="hr">
                  <p class="view-text" href="#">View</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="column is-4-desktop is-12-mobile is-6-tablet">
          <div class="image-container">
            <img class="image" src="../../../assets/portfolio/laoffer.png">
            <a href="https://laoffer.la/" target="_blank">
              <div class="after has-text-centered">
                <div class="view">
                  <p class="view-text">Laoffer</p>
                  <hr class="hr">
                  <p class="view-text" href="#">View</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="column is-4-desktop is-12-mobile is-6-tablet">
          <div class="image-container">
            <img class="image" src="../../../assets/portfolio/royal.png">
            <a href="http://www.royalexpress.la/" target="_blank">
              <div class="after has-text-centered">
                <div class="view">
                  <p class="view-text">Rayal Supermarket</p>
                  <hr class="hr">
                  <p class="view-text" href="#">View</p>
                </div>
              </div>
            </a>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<style>
.image {
  width: 100%;
  height: 100%;
}
.hr {
  margin-left: 130px;
  margin-right: 130px;
}
.view-text {
  color: white;
}
.view {
  margin-top: 60px;
}
.image-container {
  position: relative;
}
.image-container .after {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: none;
  color: #fff;
}
.image-container:hover .after {
  display: block;
  background: rgba(0, 0, 0, 0.6);
}
</style>