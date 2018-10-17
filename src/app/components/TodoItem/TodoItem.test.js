import React from 'react';
import { shallow } from 'enzyme';

import TodoItem from './TodoItem.component';

describe('TodoItem', () => {
	it('should render', () => {
		const wrapper = shallow(
			<TodoItem />
		);
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
