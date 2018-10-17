/**
 * Import theme.
 * Being the first import is important, so that it is the default style
 * and other style can override it
 */
import cmf from '@talend/react-cmf';
import 'todomvc-common/base.css';
import 'todomvc-common/base.js';
import 'todomvc-app-css/index.css';
import components from './components';

/**
 * Initialize CMF
 * This will:
 * - Register your components in the CMF registry
 * - Register your action creators in CMF registry
 * - Setup redux store using reducer
 * - Fetch the settings
 * - render react-dom in the dom 'app' element
 */
cmf.bootstrap({
	components,
	settingsURL: '/settings.json',
});
