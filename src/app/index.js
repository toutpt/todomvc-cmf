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
import todos from './todos';
import saga from './saga';

cmf.bootstrap({
	components,
	...todos,
	saga,
	settingsURL: '/settings.json',
});
