import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Navigation from '../main-components/Navigation';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper
 * for navigation component
 * @function setup
 * @param {object} props - component props specific to the setup
 * @param {object} state - initial state for the setup
 */
const setup = (props={}, state=null) => {
    const wrapper = shallow(<Navigation {...props}/>)
    if ( state ) wrapper.setState(state)
    return wrapper;
}


/**
 * Returns ShallowWrapper containing node(s) with the given
 * data-test value
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Target for searching a
 * data-test value
 * @param {string} val - Value of the data-test attribute
 * for search
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}


test(`renders navigation component without an error`, () => {
    const wrapper = setup();
    const navigationComponent = findByTestAttr(wrapper,"component-navigation");
    expect(navigationComponent.length).toBe(1);
})

test('renders navigation container without error', () => {
    const wrapper = setup();
    const navigationContainer = findByTestAttr(wrapper, "container-navigation");
    expect(navigationContainer.length).toBe(1);
})