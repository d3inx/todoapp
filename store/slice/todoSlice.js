import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, {payload}) => {
            state.todos.push(payload);
        },
        toggleComplete: (state, {payload}) => {
            state.todos.map(todo => {
                if (todo.id === payload) {
                    todo.completed = !todo.completed;
                }
            });
        },
        removeTodo: (state, {payload}) => {
            state.todos = state.todos.filter(todo => todo.id !== payload);
        }
    }
});

export const { addTodo , toggleComplete , removeTodo } = todoSlice.actions;

export default todoSlice.reducer;