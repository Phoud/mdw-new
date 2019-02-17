<template>
  <div id="main-side-bar">
    <div
      id="ms-sidebar"
      class="sidebar is-hidden-desktop-only is-hidden-desktop"
      :class="isSidebar==='is-active' ? 'left-side open' : 'left-side'"
      :style="`top: calc(0px);`"
    >
      <section class="my-sidebar-drawer">
        <div class="my-sidebar-drawer-loginInfo">
          <div class="sidebar-container">
            <a href="/">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="65.459px"
                height="54.499px"
                viewBox="0 0 69.459 58.499"
                enable-background="new 0 0 69.459 58.499"
                xml:space="preserve"
              >
                <g id="XMLID_51_">
                  <g id="XMLID_62_">
                    <path
                      id="XMLID_72_"
                      fill="#FFFFFF"
                      d="M16.701,8.611L16.701,8.611c1.392,0,2.726,0.57,3.709,1.584l14.777,15.827
			c0.416,0.472,1.137,0.472,1.553,0l13.938-14.934C45.473,4.336,37.438,0,28.414,0C12.721,0,0,13.096,0,29.25
			c0,16.154,12.721,29.249,28.414,29.249c7.375,0,14.092-2.893,19.143-7.635V30.59c0-0.481-0.565-0.721-0.895-0.381l-9.123,10.791
			c-0.835,0.988-2.326,0.988-3.161,0l-9.123-10.791c-0.33-0.34-0.895-0.1-0.895,0.381v20.921c-5.691,0-10.304-3.902-10.304-9.76
			V11.334C14.056,9.831,15.24,8.611,16.701,8.611z"
                    ></path>
                    <path
                      id="XMLID_66_"
                      fill="#FFFFFF"
                      d="M61.966,36.336h-6.72c-0.885,0-1.603,0.739-1.603,1.649v6.918
			c0,0.911,0.718,1.65,1.603,1.65h6.72c0.885,0,1.602-0.738,1.602-1.65v-6.918C63.568,37.074,62.851,36.336,61.966,36.336z"
                    ></path>
                    <path
                      id="XMLID_65_"
                      fill="#FFFFFF"
                      d="M56.866,27.923h4.626c0.803,0,1.453-0.67,1.453-1.496v-4.762
			c0-0.826-0.65-1.496-1.453-1.496h-4.626c-0.802,0-1.453,0.67-1.453,1.496v4.762C55.413,27.254,56.063,27.923,56.866,27.923z"
                    ></path>
                    <path
                      id="XMLID_64_"
                      fill="#FFFFFF"
                      d="M68.401,28.808h-3.809c-0.565,0-1.023,0.471-1.023,1.053v3.922
			c0,0.582,0.458,1.053,1.023,1.053h3.809c0.565,0,1.023-0.472,1.023-1.053v-3.922C69.424,29.279,68.966,28.808,68.401,28.808z"
                    ></path>
                    <path
                      id="XMLID_63_"
                      fill="#FFFFFF"
                      d="M63.684,18.621h2.721c0.437,0,0.792-0.365,0.792-0.815v-2.801
			c0-0.45-0.355-0.815-0.792-0.815h-2.721c-0.437,0-0.792,0.365-0.792,0.815v2.801C62.892,18.256,63.246,18.621,63.684,18.621z"
                    ></path>
                  </g>
                  <path
                    id="XMLID_61_"
                    fill="#FFFFFF"
                    d="M36.199,43.609c-0.098,0-0.192-0.024-0.289-0.032c1.521,3.879,2.518,8.013,2.895,12.312
		c2.857-1.181,5.525-2.85,7.884-4.974v-17.84l-7.865,9.305C38.163,43.161,37.206,43.609,36.199,43.609z"
                  ></path>
                  <path
                    id="XMLID_60_"
                    fill="#FFFFFF"
                    d="M28.503,1.03c-10.656,0-19.917,6.243-24.529,15.359c2.959,0.584,5.819,1.482,8.542,2.672
		v-7.85c0-2.294,1.812-4.16,4.041-4.16c1.762,0,3.487,0.737,4.749,2.041l14.898,15.956L49.419,10.89
		C44.152,4.608,36.595,1.03,28.503,1.03z"
                  ></path>
                  <g id="XMLID_58_">
                    <path
                      id="XMLID_59_"
                      fill="#FFFFFF"
                      d="M62.729,37.618h-6.855c-0.416,0-0.755,0.351-0.755,0.779v7.056
			c0,0.429,0.339,0.779,0.755,0.779h6.855c0.416,0,0.755-0.351,0.755-0.779v-7.056C63.485,37.968,63.146,37.618,62.729,37.618z"
                    ></path>
                  </g>
                  <path
                    id="XMLID_57_"
                    fill="#FFFFFF"
                    d="M57.527,27.228h4.719c0.333,0,0.603-0.28,0.603-0.622V21.75c0-0.342-0.27-0.621-0.603-0.621
		h-4.719c-0.333,0-0.603,0.28-0.603,0.621v4.857C56.924,26.949,57.194,27.228,57.527,27.228z"
                  ></path>
                  <path
                    id="XMLID_56_"
                    fill="#FFFFFF"
                    d="M69.294,29.938h-3.886c-0.091,0-0.165,0.077-0.165,0.171v4c0,0.094,0.074,0.171,0.165,0.171
		h3.886c0.091,0,0.165-0.077,0.165-0.171v-4C69.459,30.015,69.385,29.938,69.294,29.938z"
                  ></path>
                  <rect
                    id="XMLID_55_"
                    x="64.482"
                    y="14.954"
                    fill="#FFFFFF"
                    width="2.707"
                    height="2.785"
                  ></rect>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <ul class="sidebar-drawer-box">
          <template>
            <p class="service-title">Our Services</p>
            <div class="columns is-multiline is-mobile is-tablet">
              <div class="column is-12-mobile is-6-tablet">
                <li :class="isRoute('Web')">
                  <router-link :to="{name: 'Web' }" @click.native.prevent="maskClick()">
                    <i class="sidebar-icon-md material-icons icon-color" style="color: #1633ff;">web</i>
                    <span>Web Development</span>
                  </router-link>
                </li>
              </div>
              <div class="column is-12-mobile is-6-tablet">
                <li :class="isRoute('MobileApp')">
                  <router-link :to="{name:'MobileApp' }" @click.native.prevent="maskClick()">
                    <i
                      class="sidebar-icon-md material-icons icon-color"
                      style="color: #1633ff;"
                    >mobile_screen_share</i>
                    <span>Mobile Application</span>
                  </router-link>
                </li>
              </div>
              <div class="column is-12-mobile is-6-tablet">
                <li :class="isRoute('Windows')">
                  <router-link :to="{name:'Windows' }" @click.native.prevent="maskClick()">
                    <i class="sidebar-icon-md material-icons" style="color: #1633ff;">computer</i>
                    <span>Computer Software</span>
                  </router-link>
                </li>
              </div>
              <div class="column is-12-mobile is-6-tablet">
                <li :class="isRoute('Graphic')">
                  <router-link :to="{name:'Graphic' }" @click.native.prevent="maskClick()">
                    <i class="sidebar-icon-md material-icons" style="color: #1633ff;">photo</i>
                    <span>Graphic Design</span>
                  </router-link>
                </li>
              </div>
              <div class="column is-12-mobile is-6-tablet">
                <li :class="isRoute('Maintenance')">
                  <router-link :to="{name:'Maintenance' }" @click.native.prevent="maskClick()">
                    <i class="sidebar-icon-md material-icons" style="color: #1633ff;">verified_user</i>
                    <span>Software Maitenance</span>
                  </router-link>
                </li>
              </div>
              <div class="column is-12-mobile is-6-tablet">
                <li :class="isRoute('Consult')">
                  <router-link :to="{name:'Consult' }" @click.native.prevent="maskClick()">
                    <i class="sidebar-icon-md material-icons" style="color: #1633ff;">info</i>
                    <span>Consultancy</span>
                  </router-link>
                </li>
              </div>
            </div>
            <hr>
            <li :class="isRoute('news')">
              <router-link :to="{name:'Portfolio' }" @click.native.prevent="maskClick()">
                <i class="sidebar-icon-md material-icons" style="color: #1633ff;">collections</i>
                <span>Our Portfolios</span>
              </router-link>
            </li>
            <li :class="isRoute('Portfolio')">
              <router-link :to="{name:'' }" @click.native.prevent="maskClick()">
                <i class="sidebar-icon-md material-icons" style="color: #1633ff;">business</i>
                <span>Our Customers</span>
              </router-link>
            </li>
          </template>
        </ul>
        <ul class="sidebar-drawer-box"></ul>
      </section>
    </div>
    <div
      class="sidebar-mask"
      @click="maskClick()"
      :class="isSidebar==='is-active' ? '' : 'left-side' "
    ></div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      logoutClass: "fa-external-link-square-alt"
    };
  },
  computed: {
    ...mapState(["isSidebar"])
  },
  watch: {
    isSidebar: function(n, o) {
      if (n === "left-side") {
        this.removeClasses();
      } else {
        this.addClasses();
      }
    }
  },
  methods: {
    ...mapMutations(["setSidebar"]),
    removeClasses() {
      $("body").removeClass("hidden");
      $("html").removeClass("hidden");
    },
    addClasses() {
      $("html").addClass("hidden");
      $("body").addClass("hidden");
    },
    maskClick() {
      this.removeClasses();
      this.setSidebar({
        isSidebar: this.isSidebar === "is-active" ? "left-side" : ""
      });
    },
    isRoute(n) {
      return this.$route.name === n ? "is-active" : "";
    }
  }
};
</script>
<style scoped>
.service-title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #010e28;
  margin-bottom: 10px;
}
li a.icon-color {
  color: #1633ff;
}
li.is-active {
  background-color: #ececec !important;
}

.sidebar {
  position: fixed !important;
  top: 0;
  max-height: 100vh !important;
  height: 100vh;
  max-width: 80vw !important;
  background-color: #efefef;
  min-width: 45px !important;
  outline: none;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  z-index: 10000;
  -webkit-overflow-scrolling: touch;
  will-change: transform;
  -webkit-transition: -webkit-transform 233ms cubic-bezier(0, 0, 0.21, 1);
  transition: -webkit-transform 233ms cubic-bezier(0, 0, 0.21, 1);
  transition: transform 233ms cubic-bezier(0, 0, 0.21, 1);
  transition: transform 233ms cubic-bezier(0, 0, 0.21, 1),
    -webkit-transform 233ms cubic-bezier(0, 0, 0.21, 1);
  display: inline-block;
}

.sidebar.left-side {
  left: 0 !important;
  -webkit-transform: translateX(-100%) !important;
  transform: translateX(-100%) !important;
}

.sidebar.open {
  -webkit-transform: translateX(0) !important;
  transform: translateX(0) !important;
}

.my-sidebar-drawer-loginInfo {
  height: 148px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #303fd9;
  overflow: hidden;
  /* background-image: linear-gradient(to bottom right, #303fd9, #303fd9); */
  background-repeat: no-repeat;
  background-size: cover;
}

.my-sidebar-drawer {
  width: 100%;
  height: 100%;
  -overflow-scrolling: touch;
}

/** box */
.sidebar-drawer-box {
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #555;
}

.sidebar-drawer-box li {
  position: relative;
  height: 48px;
  line-height: 48px;
  overflow: hidden;
  font-size: 14px;
}

.sidebar-drawer-box li a {
  display: block;
}

.sidebar-drawer-box li span {
  font-weight: 600;
  color: #3a3e4a;
}

.sidebar-drawer-box li .sidebar-icon-md {
  padding: 10px 16px 10px 16px;
  margin-right: 16px;
  float: left;
  font-size: 26px !important;
  color: #898b92;
  min-width: 56px;
  max-width: 56px;
}

.sidebar-icon-md {
  position: relative;
  display: inline-block;
  font-size: 16px !important;
  line-height: 1;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

/** box */
.my-sidebar-drawer-loginInfo .sidebar-container {
  width: 96px;
  height: 96px;
  padding: 16px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.my-sidebar-drawer-loginInfo .sidebar-container img {
  display: block;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.i-sidebar-content-layout-size-defined .i-sidebar-content-fill-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.i-sidebar-content-fill-content {
  display: block;
  height: 0;
  max-height: 100%;
  max-width: 100%;
  min-height: 100%;
  min-width: 100%;
  width: 0;
  margin: auto;
}

.i-sidebar-content-replaced-content,
.i-sidebar-content-screen-reader {
  padding: 0 !important;
  border: none !important;
}

.my-sidebar-drawer-loginInfo .drawer-unlogin {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 16px 16px;
  white-space: nowrap;
  font-size: 15px;
  line-height: 1.2;
  color: #fff;
}

.my-sidebar-drawer-loginInfo .drawer-seeker {
  display: inline-block;
  padding: 0 6px 0 0;
  font-size: 15px;
  line-height: 1.2;
  border-right: solid 1px #fff;
  color: #fff;
}

.my-sidebar-drawer-loginInfo .drawer-employer {
  display: inline-block;
  padding-left: 2px;
  font-size: 15px;
  line-height: 1.2;
  color: #fff;
}

#ms-sidebar {
  background: #fff;
  width: 80%;
  height: 100%;
}

.sidebar-mask {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  opacity: 0.2;
  background-image: none !important;
  background-color: #000;
  z-index: 9999;
}

.sidebar-mask.left-side {
  display: none;
}

.ine-bottom {
  border-bottom: 1px solid #ffffff !important;
}

.line-bottom-blue {
  border-bottom: 1px solid #004fce !important;
}

.line-bottom-green {
  border-bottom: 1px solid #00d29d !important;
}

.sidebar-drawer-box + .sidebar-drawer-box {
  border-top: 1px solid #ebebec;
}

@media screen and (max-width: 366px) {
  .my-sidebar-drawer-loginInfo .drawer-seeker,
  .my-sidebar-drawer-loginInfo .drawer-employer {
    font-size: 14.2px;
  }
}
</style>
