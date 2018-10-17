import { select, takeEvery, put } from 'redux-saga/lib/effects';
import uuid from 'uuid';
import { Map, List } from 'immutable';
import { ACTION_TYPE_ADD_ITEM, ACTION_TYPE_DELETE, ACTION_TYPE_COMPLETED, ACTION_TYPE_FILTER, ACTION_TYPE_CLEAR } from './constants';
import TodoListComponent from './TodoList.component';

function* onAddEffect({ text }) {
	const todo = new Map({
		text,
		completed: false,
		id: uuid.v4(),
	});
	const state = yield select(TodoListComponent.getState);
	const newState = state.set('todos', state.get('todos').push(todo));
	yield put(TodoListComponent.setStateAction(newState));
}

function* onDeleteEffect({ id }) {
	const state = yield select(TodoListComponent.getState);
	const todos = state.get('todos').filter(item => item.get('id') !== id);
	const newState = state.set('todos', todos);
	yield put(TodoListComponent.setStateAction(newState));
}

function* onCompletedEffect({ id }) {
	const state = yield select(TodoListComponent.getState);
	const todos = state.get('todos').map(item => {
		if (item.get('id') === id) {
			return item.set('completed', !item.get('completed'));
		}
		return item;
	});
	const newState = state.set('todos', todos);
	yield put(TodoListComponent.setStateAction(newState));
}

function* onFilterEffect({ action }) {
	yield put(TodoListComponent.setStateAction({ filter: action }));
}

function* onClearEffect() {
	yield put(TodoListComponent.setStateAction({ todos: new List() }));
}

function* main() {
	yield takeEvery(ACTION_TYPE_ADD_ITEM, onAddEffect);
	yield takeEvery(ACTION_TYPE_DELETE, onDeleteEffect);
	yield takeEvery(ACTION_TYPE_COMPLETED, onCompletedEffect);
	yield takeEvery(ACTION_TYPE_FILTER, onFilterEffect);
	yield takeEvery(ACTION_TYPE_CLEAR, onClearEffect);
}

export default {
	'TodoList#main': main,
};
