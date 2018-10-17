import { List } from 'immutable';
import TodoList from './TodoList.component';

function count({ context }) {
	const state = TodoList.getState(context.store.getState());
	if (state) {
		return state.get('todos', new List()).size;
	}
	return 0;
}

function hasTodos(...args) {
	return count(...args) !== 0;
}

const cache = {};
function getAll({ context }) {
	const state = TodoList.getState(context.store.getState());
	if (!state) {
		return [];
	}
	if (cache.key !== state) {
		cache.key = state;
		cache.value = state.get('todos').toJS();
	}
	return cache.key;
}

export default {
	'TodoList#count': count,
	'TodoList#has': hasTodos,
	'TodoList#getAll': getAll,
};
