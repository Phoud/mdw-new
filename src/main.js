// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Input from './Input'
import VueCarousel from 'vue-carousel';
Vue.config.productionTip = false

Vue.use(VueCarousel);

require('../css/bulma.css');
require('../css/style.css');
require('../css/form.css');

Vue.component('Input', Input)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})