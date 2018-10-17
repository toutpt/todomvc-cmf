import React from 'react';
import PropTypes from 'prop-types';
import { Inject, cmfConnect } from '@talend/react-cmf';
import { Map, List } from 'immutable';

const DEFAULT_STATE = new Map({
	todos: new List(),
});

function filterAll(item) {
	return item;
}

function filterActive(item) {
	return item.completed !== true;
}

function filterCompleted(item) {
	return !filterActive(item);
}

function filter(action) {
	if (action === 'completed') {
		return filterCompleted;
	}
	if (action === 'active') {
		return filterActive;
	}
	return filterAll;
}

function TodoList(props) {
	return (
		<section className="main">
			<input
				id="toggle-all"
				className="toggle-all"
				type="checkbox"
				onChange={() => props.dispatch({
					type: TodoList.ACTION_TYPE_TOGGLE_ALL,
				})}
			/>
			<label htmlFor="toggle-all">Mark all as complete</label>
			<ul className="todo-list">
				{props.todos.filter(filter(props.filter)).map(todo => (
					<li className={todo.completed ? 'completed' : ''} key={todo.text}>
						<Inject component="TodoItem" item={todo} />
					</li>
				))}
			</ul>
		</section>
	);
}
TodoList.displayName = 'TodoList';
TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	})),
	...cmfConnect,
};
TodoList.defaultProps = {
	todos: [],
};

export default cmfConnect({
	defaultState: DEFAULT_STATE,
	defaultProps: {
		spreadCMFState: true,
	},
})(TodoList);
