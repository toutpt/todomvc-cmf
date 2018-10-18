import { fork, takeEvery } from 'redux-saga/effects';
import cmf from '@talend/react-cmf';
import todos from './todos';
/* eslint-disable no-console */

// function* onHeaderEnter({ event, data }) {
// 	yield cmf.sagas.putActionCreator('service#todos:add', event, data);
// }

// function* onToggleAll() {
// 	yield cmf.sagas.putActionCreator('service#todos:toggleAll');
// }

function* onFilter({ event, action }) {
	yield cmf.sagas.putActionCreator('service#todos:filter', event, { action });
}

export default function* main() {
	yield fork(todos.saga); // should handled by service
	// const Header = cmf.component.get('Header');
	// const TodoList = cmf.component.get('TodoList');
	const TodoFooter = cmf.component.get('TodoFooter');
	// yield takeEvery(TodoList.ACTION_TYPE_TOGGLE_ALL, onToggleAll);
	// yield takeEvery(Header.ACTION_TYPE_ENTER, onHeaderEnter);
	yield takeEvery(TodoFooter.ACTION_TYPE_FILTER, onFilter);
}
