import React from 'react';
import { shallow } from 'enzyme';

import TodoFooter from './TodoFooter.component';

describe('TodoFooter', () => {
	it('should render', () => {
		const wrapper = shallow(
			<TodoFooter />
		);
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
