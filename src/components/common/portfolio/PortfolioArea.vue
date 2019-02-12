<template>
  <div class="section">
    <div class="container">
      <div class="has-text-centered">
        <p class="highlight-text">Here are all works we have done.</p>
        <p
          class="sub-text"
        >You can find our works we have done below by clicking on the image.</p>
      </div>
      <div class="columns is-mobile highlight-icon is-multiline is-desktop is-tablet">
        <div class="column is-4-desktop is-12-moblie is-6-tablet">
          <div class="image-container">
            <img class="image" src="../../../assets/carousel1.jpg" alt>
            <a href>
              <div class="after has-text-centered">
                <div class="view">
                  <p class="view-text">Mekong Digital Works</p>
                  <hr class="hr">
                  <p class="view-text" href="#">View</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="column is-4-desktop is-12-mobile is-6-tablet">
          <div class="image-container">
            <img class="image" src="../../../assets/carousel2.jpg" alt>
            <a href>
              <div class="after has-text-centered">
                <div class="view">
                  <p class="view-text">Mekong Digital Works</p>
                  <hr class="hr">
                  <p class="view-text" href="#">View</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="column is-4-desktop is-12-mobile is-6-tablet">
          <div class="image-container">
            <img class="image" src="../../../assets/carousel3.jpg">
            <a href>
              <div class="after has-text-centered">
                <div class="view">
                  <p class="view-text">Mekong Digital Works</p>
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
  margin-top: 87px;
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