import { List } from 'immutable';
import cmf from '@talend/react-cmf';

const DEFAULT_TODOS_IMMUTABLE = new List();
const DEFAULT_TODOS = [];

function getTodoListState(state) {
	const TodoList = cmf.component.get('TodoList');
	return TodoList.getState(state);
}

function getTodosImmutable(state) {
	const todoListState = getTodoListState(state);
	if (todoListState) {
		return todoListState.get('todos', DEFAULT_TODOS_IMMUTABLE);
	}
	return DEFAULT_TODOS_IMMUTABLE;
}

const cache = {};
function getAll(state) {
	const immutableTodos = getTodosImmutable(state);
	if (!immutableTodos) {
		return DEFAULT_TODOS;
	}
	if (cache.key !== immutableTodos) {
		cache.key = immutableTodos;
		cache.value = immutableTodos.toJS();
	}
	return cache.value;
}

function count(state) {
	return getAll(state).length;
}

function hasTodos(...args) {
	return count(...args) !== 0;
}

function asExpression(selector) {
	function selectorAsExpression({ context }, ...args) {
		return selector(context.store.getState(), ...args);
	}
	if (name) {
		Object.defineProperty(selectorAsExpression, 'name', { value: name });
	}
	return selectorAsExpression;
}

export function getExpressions() {
	return {
		'service#todos:count': asExpression(count),
		'service#todos:has': asExpression(hasTodos),
		'service#todos:getAll': asExpression(getAll),
	};
}

export default {
	count,
	hasTodos,
	getAll,
};
