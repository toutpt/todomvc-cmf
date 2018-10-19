import cmf from '@talend/react-cmf';
import { select, takeEvery, put } from 'redux-saga/lib/effects';
import uuid from 'uuid';
import { Map } from 'immutable';
import {
	ACTION_TYPE_ADD_ITEM,
	ACTION_TYPE_DELETE,
	ACTION_TYPE_COMPLETED,
	ACTION_TYPE_FILTER,
	ACTION_TYPE_CLEAR,
	ACTION_TYPE_TOGGLE_ALL,
} from './constants';

function* onAddEffect({ text }) {
	const todo = new Map({
		text,
		completed: false,
		id: uuid.v4(),
	});
	const TodoListComponent = cmf.component.get('TodoList');
	const state = yield select(TodoListComponent.getState);
	const newState = state.set('todos', state.get('todos').push(todo));
	yield put(TodoListComponent.setStateAction(newState));
}

function* onDeleteEffect({ id }) {
	const TodoListComponent = cmf.component.get('TodoList');
	const state = yield select(TodoListComponent.getState);
	const todos = state.get('todos').filter(item => item.get('id') !== id);
	const newState = state.set('todos', todos);
	yield put(TodoListComponent.setStateAction(newState));
}

function* onCompletedEffect({ id }) {
	const TodoListComponent = cmf.component.get('TodoList');
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
	const TodoListComponent = cmf.component.get('TodoList');
	yield put(TodoListComponent.setStateAction({ filter: action }));
}

function* onClearEffect() {
	const TodoListComponent = cmf.component.get('TodoList');
	const state = yield select(TodoListComponent.getState);
	const todos = state.get('todos').filter(item => !item.get('completed'));
	const newState = state.set('todos', todos);
	yield put(TodoListComponent.setStateAction(newState));
}

function* onToggleAllEffect(action) {
	const TodoListComponent = cmf.component.get('TodoList');
	const state = yield select(TodoListComponent.getState);
	const todos = state.get('todos').map(item => item.set('completed', action.toggleAll));
	const newState = state.set('todos', todos);
	yield put(TodoListComponent.setStateAction(newState));
}

export default function* main() {
	yield takeEvery(ACTION_TYPE_ADD_ITEM, onAddEffect);
	yield takeEvery(ACTION_TYPE_DELETE, onDeleteEffect);
	yield takeEvery(ACTION_TYPE_COMPLETED, onCompletedEffect);
	yield takeEvery(ACTION_TYPE_FILTER, onFilterEffect);
	yield takeEvery(ACTION_TYPE_CLEAR, onClearEffect);
	yield takeEvery(ACTION_TYPE_TOGGLE_ALL, onToggleAllEffect);
}
