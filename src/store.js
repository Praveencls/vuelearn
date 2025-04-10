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
	getters: {
		allTodos: (state) => {
			return state.todos;
		},
		completedTodos: (state) => {
			return state.todos.filter((todo) => todo.completed).length;
		},
		pendingTodos: (state) => {
			return state.todos.filter((todo) => !todo.completed).length;
		},
		incompleteTodos: (state) => {
			return state.todos.filter((todo) => !todo.completed);
		},
		todoCount: (state) => {
			return state.todos.length;
		},
	},
	mutations: {
		ADD_TODO(state, todo) {
			state.todos.push({ text: todo, completed: false });
		},
		DELETE_TODO(state, todo) {
			state.todos.splice(state.todos.indexOf(todo), 1);
		},
		TOGGLE_TODO_STATUS(state, todo) {
			todo.completed = !todo.completed;
		}
	},
	actions: {
		addNewTodo({ commit }, todo) {
			commit("ADD_TODO", todo);
		},
		deleteTodo({ commit }, todo) {
			commit("DELETE_TODO", todo);
		},
		toggleTodoStatus({ commit }, todo) {
			commit("TOGGLE_TODO_STATUS", todo);
		}
	},
});
