import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './TodoList.component';

describe('TodoList', () => {
	it('should render', () => {
		const wrapper = shallow(
			<TodoList />
		);
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
