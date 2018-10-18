import React from 'react';
import PropTypes from 'prop-types';
import { cmfConnect } from '@talend/react-cmf';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onEnter = this.onEnter.bind(this);
		this.state = { text: '' };
	}

	onChange(event) {
		this.setState({ text: event.target.value });
	}

	onEnter(event) {
		if (event.key === 'Enter') {
			if (this.props.onEnter) {
				this.props.onEnter(event, { text: this.state.text });
			}
			this.setState({ text: '' });
		}
	}

	render() {
		return (
			<header className="header">
				<h1>{this.props.title}</h1>
				<input
					className="new-todo"
					placeholder={this.props.placeholder}
					value={this.state.text}
					onChange={this.onChange}
					onKeyDown={this.onEnter}
					autoFocus
					type="text"
				/>
			</header>
		);
	}
}
Header.propTypes = {
	title: PropTypes.string,
	placeholder: PropTypes.string,
	text: PropTypes.string,
	onChange: PropTypes.func,
	...cmfConnect.propTypes,
};

Header.defaultProps = {
	title: 'todos',
	placeholder: 'What needs to be done?',
};
Header.ACTION_TYPE_ENTER = 'HEADER_ENTER';

export default cmfConnect({})(Header);
