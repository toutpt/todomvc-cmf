import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header.component';

describe('Header', () => {
	it('should render', () => {
		const wrapper = shallow(
			<Header />
		);
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
