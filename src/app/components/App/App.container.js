import React from 'react';
import { Inject } from '@talend/react-cmf';

export default function App() {
	/**
	 * Instanciate all global components here
	 * Ex : we register @talend/react-components <IconsProvider />
	 * so that all icons are available in each view
	 */
	return (
		<div>
			<section className="todoapp">
				<Inject component="Header" />
				<Inject component="TodoList" />
				<Inject component="TodoFooter" />
			</section>
			<Inject component="Footer" />
		</div>
	);
}

App.displayName = 'App';
App.propTypes = {};
