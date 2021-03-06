import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Skills from '../main-components/Skills';

Enzyme.configure({ adapter: new EnzymeAdapter });

/**
 * Function to create a ShallowWrapper
 * for skills component
 * @function setuo
 * @param {object} props - component props
 * specific to the setup
 * @param {object} state - initial state for the setup
 */
const setup = (props={}, state=null) => {
    const wrapper = shallow(<Skills {...props}/>)
    if ( state ) wrapper.setState(state)
    return wrapper;
}

/**
 * Returns ShallowWrapper containing node(s) with
 * the given data-test value
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Target for searching a
 * data-test value
 * @param {string} val - Value of the data-test attribute
 * for search
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}


test('renders skills without an error', () => {
    const wrapper = setup();
    const skillsComponent = findByTestAttr(wrapper, "component-skills");
    expect(skillsComponent.length).toBe(1);
})

test('renders skills-container without an error', () => {
    const wrapper = setup();
    const skillsContainer = findByTestAttr(wrapper, "container-skills");
    expect(skillsContainer.length).toBe(1);
})

describe('tests individual containers within skills-container', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    
    })

    test('renders frontend-container without error', () => {
        const frontendContainer = findByTestAttr(wrapper, "container-frontend");
        expect(frontendContainer.length).toBe(1);
    })
    
    test('renders backend-container', () => {
        const backendContainer = findByTestAttr(wrapper, "container-backend");
        expect(backendContainer.length).toBe(1);
    })

    test('renders State & Test container', () => {
        const StateTestContainer = findByTestAttr(wrapper, "container-StateTest");
        expect(StateTestContainer.length).toBe(1);
    })

    test('renders languages container', () => {
        const languagesContainer = findByTestAttr(wrapper, "container-languages");
        expect(languagesContainer.length).toBe(1);
    })

})

