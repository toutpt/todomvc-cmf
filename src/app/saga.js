import { fork, takeEvery } from 'redux-saga/effects';
import cmf from '@talend/react-cmf';
import todos from './todos';
/* eslint-disable no-console */

function* onFilter({ event, action }) {
	yield cmf.sagas.putActionCreator('service#todos:filter', event, { action });
}

function* onClearCompleted() {
	yield cmf.sagas.putActionCreator('service#todos:clear');
}

export default function* main() {
	yield fork(todos.saga);  // start the service cf TUI-252
	const TodoFooter = cmf.component.get('TodoFooter');
	yield takeEvery(TodoFooter.ACTION_TYPE_FILTER, onFilter);
	yield takeEvery(TodoFooter.ACTION_TYPE_CLEAR_COMPLETED, onClearCompleted);
}
