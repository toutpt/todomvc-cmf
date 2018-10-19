import { ACTION_TYPE_ADD_ITEM, ACTION_TYPE_DELETE, ACTION_TYPE_COMPLETED, ACTION_TYPE_FILTER, ACTION_TYPE_CLEAR, ACTION_TYPE_TOGGLE_ALL } from './constants';

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

function toggleAll(event, data) {
	return {
		type: ACTION_TYPE_TOGGLE_ALL,
		...data,
	};
}

export default {
	'service#todos:add': add,
	'service#todos:rm': rm,
	'service#todos:completed': completed,
	'service#todos:filter': filter,
	'service#todos:clear': clear,
	'service#todos:toggleAll': toggleAll,
};
