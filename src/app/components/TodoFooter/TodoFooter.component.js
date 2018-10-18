import React from 'react';
import PropTypes from 'prop-types';
import { cmfConnect } from '@talend/react-cmf';

class TodoFooter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { filter: 'all' };
		this.onClick = this.onClick.bind(this);
	}

	onClick(event) {
		event.preventDefault();
		event.stopPropagation();
		event.persist();
		if (event.target.tagName === 'BUTTON') {
			this.setState({ filter: 'all' });
			this.props.dispatch({
				type: TodoFooter.ACTION_TYPE_CLEAR_COMPLETED,
				event,
			});
		} else {
			const action = event.target.getAttribute('href').split('/').pop();
			this.setState({ filter: action || 'all' });
			this.props.dispatch({
				type: TodoFooter.ACTION_TYPE_FILTER,
				event,
				action,
			});
		}
	}

	getFilterClass(filter) {
		return this.state.filter === filter ? 'selected' : undefined;
	}

	render() {
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{this.props.count}</strong>
					<span>item</span>
					<span>left</span>
				</span>
				<ul className="filters">
					<li>
						<a
							href="#/"
							onClick={this.onClick}
							className={this.getFilterClass('all')}
						>
							All
						</a>
					</li>
					<li>
						<a
							href="#/active"
							onClick={this.onClick}
							className={this.getFilterClass('active')}
						>
							Active
						</a>
					</li>
					<li>
						<a
							href="#/completed"
							onClick={this.onClick}
							className={this.getFilterClass('completed')}
						>
							Completed
						</a>
					</li>
				</ul>
				<button className="clear-completed" onClick={this.onClick} >Clear completed</button>
			</footer>
		);
	}
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
TodoFooter.ACTION_TYPE_CLEAR_COMPLETED = 'TodoFooter_ClearCompleted';
export default cmfConnect({})(TodoFooter);
