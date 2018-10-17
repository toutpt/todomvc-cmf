import React from 'react';
import PropTypes from 'prop-types';
import { cmfConnect } from '@talend/react-cmf';

function TodoItem(props) {
	return (
		<div className="view">
			<input
				className="toggle"
				type="checkbox"
				onChange={() => props.dispatchActionCreator('TodoList#completed', event, props.item)}
				checked={props.item.completed}
			/>
			<label>{props.item.text}</label>
			<button
				className="destroy"
				onClick={() => props.dispatchActionCreator('TodoList#rm', event, props.item)}
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
