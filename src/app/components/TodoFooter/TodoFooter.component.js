import React from 'react';
import PropTypes from 'prop-types';
import { cmfConnect } from '@talend/react-cmf';

function TodoFooter(props) {
	const onClick = event => {
		event.preventDefault();
		event.stopPropagation();
		event.persist();
		if (event.target.tagName === 'BUTTON') {
			props.dispatch({
				type: TodoFooter.ACTION_TYPE_CLEAR_COMPLETED,
				event,
			});
		} else {
			const action = event.target.getAttribute('href').split('/').pop();
			props.dispatch({
				type: TodoFooter.ACTION_TYPE_FILTER,
				event,
				action,
			});
		}
	};
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{props.count}</strong>
				<span>item</span>
				<span>left</span>
			</span>
			<ul className="filters">
				<li>
					<a href="#/" onClick={onClick} className="selected">All</a>
				</li>
				<li>
					<a href="#/active" onClick={onClick} >Active</a>
				</li>
				<li>
					<a href="#/completed" onClick={onClick} >Completed</a>
				</li>
			</ul>
			<button className="clear-completed" onClick={onClick} >Clear completed</button>
		</footer>
	);
}

TodoFooter.displayName = 'TodoFooter';
TodoFooter.propTypes = {
	count: PropTypes.number,
	...cmfConnect.propTypes,
};
TodoFooter.defaultProps = {
	count: 0,
};
TodoFooter.ACTION_TYPE_FILTER = 'TodoFooter_Filter';
export default cmfConnect({})(TodoFooter);
