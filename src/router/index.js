import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/common/Home.vue'
import Web from '../components/common/web/Web.vue'
import Windows from '../components/common/windows/Windows.vue'
import MobileApp from '../components/common/mobile/MobileApp.vue'
import Maintenance from '../components/common/maintenance/Maintenance.vue'
import Graphic from '../components/common/graphic/Graphic.vue'
import Consult from '../components/common/consult/Consult.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/web',
            name: 'Web',
            component: Web
        },
        {
            path: '/windows',
            name: 'Windows',
            component: Windows
        },
        {
            path: '/mobileapp',
            name: 'MobileApp',
            component: MobileApp
        },
        {
            path: '/maintenance',
            name: 'Maintenance',
            component: Maintenance
        },
        {
            path: '/graphic',
            name: 'Graphic',
            component: Graphic
        },
        {
            path: '/consult',
            name: 'Consult',
            component: Consult
        }
    ]
})