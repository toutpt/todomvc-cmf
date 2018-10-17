import React from 'react';
import PropTypes from 'prop-types';
import { cmfConnect } from '@talend/react-cmf';
import { Map } from 'immutable';

const DEFAULT_STATE = new Map();

function dispatchOnEnter(props) {
	return event => {
		if (event.key === 'Enter') {
			props.dispatchActionCreator('TodoList#add', event, { text: props.state.get('text') });
			props.setState(props.state.set('text', ''));
		}
	};
}

function Header(props) {
	return (
		<header className="header">
			<h1>{props.title}</h1>
			<input
				className="new-todo"
				placeholder={props.placeholder}
				value={props.text}
				onChange={props.onChange}
				onKeyDown={dispatchOnEnter(props)}
				autoFocus
			/>
		</header>
	);
}
Header.propTypes = {
	title: PropTypes.string,
	placeholder: PropTypes.string,
	text: PropTypes.string,
	onChange: PropTypes.func,
};

Header.defaultProps = {
	title: 'todos',
	placeholder: 'What needs to be done?',
};
Header.ACTION_TYPE_CHANGE = 'HEADER_CHANGE';

export default cmfConnect({
	defaultState: DEFAULT_STATE,
	defaultProps: {
		onChangeSetState: {
			text: [0, 'target.value'],
		},
		spreadCMFState: true,
	},
})(Header);
