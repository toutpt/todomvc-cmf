import { ACTION_TYPE_ADD_ITEM, ACTION_TYPE_DELETE, ACTION_TYPE_COMPLETED, ACTION_TYPE_FILTER, ACTION_TYPE_CLEAR } from './constants';

function add(event, data) {
	return {
		type: ACTION_TYPE_ADD_ITEM,
		...data,
	};
}

function rm(event, data) {
	return {
		type: ACTION_TYPE_DELETE,
		...data,
	};
}

function completed(event, data) {
	return {
		type: ACTION_TYPE_COMPLETED,
		...data,
	};
}

function filter(event, data) {
	return {
		type: ACTION_TYPE_FILTER,
		...data,
	};
}

function clear() {
	return {
		type: ACTION_TYPE_CLEAR,
	};
}

export default {
	'TodoList#add': add,
	'TodoList#rm': rm,
	'TodoList#completed': completed,
	'TodoList#filter': filter,
	'TodoList#clear': clear,
};
