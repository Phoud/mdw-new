// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Input from './Input'
import VueCarousel from 'vue-carousel';
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false

Vue.use(VueCarousel);
Vue.use(axios)
require('../css/bulma.css');
require('../css/style.css');
require('../css/form.css');

Vue.component('Input', Input)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})