import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todos: [
			{ text: "Learn JavaScript", completed: false },
			{ text: "Learn HTML", completed: false },
			{ text: "Learn CSS", completed: false },
			{ text: "Learn React", completed: true },
		],
	},
	getters: {},
	mutations: {},
	actions: {},
});
