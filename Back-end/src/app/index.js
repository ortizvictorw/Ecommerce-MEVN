import Vue from 'vue';
import App from './Index.vue';
import router from "./router.js";


new Vue({
    router,
    render: m => m(App)
}).$mount('#app')