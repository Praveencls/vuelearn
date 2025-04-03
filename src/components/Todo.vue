<template>
	<div style="width: 250px; margin: 5px auto">
		<div style="display: flex; justify-content: space-between">
			<span :class="{ completed: todo.completed }" @click="toggleTodoStatus">{{
				todo.text
			}}</span>
			<button
				@click="$store.dispatch('deleteTodo', todo)"
				style="
					background-color: red;
					color: white;
					border: none;
					border-radius: 5px;
					padding: 5px 10px;
				"
			>
				Delete
			</button>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	props: ["todo"],
	methods: {
    ...mapActions({deleteTodo: "deleteTodo", toggleTodoStatus: "toggleTodoStatus"}),
	},
};
</script>

<style scoped>
button {
	cursor: pointer;
}
.completed {
	text-decoration: line-through;
}
</style>
