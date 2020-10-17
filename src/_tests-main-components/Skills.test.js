import React from 'react';
import Enzyme, { shallow, ShallowWrapper, shallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Skills from '../main-components/Skills';

Enzyme.configure({ adapter: new EnzymeAdapter });

/**
 * Function to create a ShallowWrapper
 * @function setuo
 * @param {object} props - component specific props
 * @param {*} state - initial state for the setup
 */
const setup = (props={}, state=null) => {
    const wrapper = shallow(<Skills {...props}/>)
    if ( state ) wrapper.setState(state)
    return wrapper;
}

/**
 * Returns ShallowWrapper containing node(s) with
 * the given data-test value;
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Target for searching a
 * data-test value.
 * @param {string} val - Value of the data-test attribute
 * for search.
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}


test('renders skills without an error', () => {
    const wrapper = setup();
    const skillsComponent = findByTestAttr(wrapper, "component-skills");
    expect(skillsComponent.length).toBe(1);
})