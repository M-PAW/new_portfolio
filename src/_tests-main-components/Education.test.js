import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Education from '../main-components/Education';

Enzyme.configure({ adapter: new  EnzymeAdapter() });

/**
 * Function to create ShallowWrapper for education component
 * @function setup
 * @param {object} props - component props specific to the setup
 * @param {object} state - initial state for the setup
 */

const setup = (props={}, state=null) => {
    const wrapper = shallow(<Education {...props}/>)
    if ( state ) wrapper.setState(state)
    return wrapper;
}

/**
 * Returns ShallowWrapper containing node(s) with the given
 * data-test value.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Target for searching a
 * data-test value.
 * @param {string} val - Value of the data-test attribute
 * for search.
 */
const findByTestAttr = (wrapper,val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

test('renders education without an error', () => {
    const wrapper = setup();
    const educationComponent = findByTestAttr(wrapper, "component-education");
    expect(educationComponent.length).toBe(1);
})
