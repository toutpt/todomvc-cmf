import { List } from 'immutable';
import cmf from '@talend/react-cmf';

function count({ context }) {
	const TodoList = cmf.component.get('TodoList');
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
	const TodoList = cmf.component.get('TodoList');
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
	'service#todos:count': count,
	'service#todos:has': hasTodos,
	'service#todos:getAll': getAll,
};
