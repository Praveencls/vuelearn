import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import routes from "./routes";
import Vuelidate from 'vuelidate';  // Import Vuelidate

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueRouter);
Vue.use(Vuelidate);
const router = new VueRouter({ routes: routes, mode: "history" });

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
