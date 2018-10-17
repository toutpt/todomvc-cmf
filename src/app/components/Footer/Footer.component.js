import React from 'react';
import PropTypes from 'prop-types';
import { cmfConnect } from '@talend/react-cmf';

function Footer(props) {
	return (
		<footer className="info">
			{props.paragraphes.map(p => (
				<p key={p.text}>{p.text}{p.href && <a href={p.href}>{p.link}</a>}</p>
			))}
		</footer>
	);
}

Footer.displayName = 'Footer';
Footer.propTypes = {
	paragraphes: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		href: PropTypes.string,
		link: PropTypes.string,
	})),
};
Footer.defaultProps = {
	paragraphes: [],
};

export default cmfConnect({})(Footer);
