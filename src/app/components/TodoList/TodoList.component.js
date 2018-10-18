import React from 'react';
import PropTypes from 'prop-types';
import { Inject, cmfConnect } from '@talend/react-cmf';

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

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		this.setState({ toggleAll: event.target.checked });
		if (this.props.onToggleAll) {
			event.persist();
			this.props.onToggleAll(event, { toggleAll: event.target.checked });
		}
	}

	render() {
		return (
			<section className="main">
				<input
					id="toggle-all"
					className="toggle-all"
					type="checkbox"
					onChange={this.onChange}
					value={this.state.toggleAll}
				/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{this.props.todos.filter(filter(this.props.filter)).map(todo => (
						<li className={todo.completed ? 'completed' : ''} key={todo.text}>
							<Inject component="TodoItem" item={todo} />
						</li>
					))}
				</ul>
			</section>
		);
	}
}
TodoList.displayName = 'TodoList';
TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	})),
	...cmfConnect.propTypes,
};
TodoList.defaultProps = {
	todos: [],
};

export default cmfConnect({})(TodoList);
