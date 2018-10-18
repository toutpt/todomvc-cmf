import React from 'react';
import PropTypes from 'prop-types';
import { cmfConnect } from '@talend/react-cmf';

function TodoItem(props) {
	return (
		<div className="view">
			<input
				id="todo-toggle"
				className="toggle"
				type="checkbox"
				onChange={() => props.dispatchActionCreator('service#todos:completed', event, props.item)}
				checked={props.item.completed}
			/>
			<label htmlFor="todo-toggle">{props.item.text}</label>
			<button
				className="destroy"
				onClick={() => props.dispatchActionCreator('service#todos:rm', event, props.item)}
			/>
		</div>
	);
}

TodoItem.displayName = 'TodoItem';
TodoItem.propTypes = {
	item: PropTypes.shape({
		text: PropTypes.string,
		completed: PropTypes.bool,
	}),
	...cmfConnect.propTypes,
};

export default cmfConnect({})(TodoItem);
