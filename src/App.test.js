import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { execPath } from 'process';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter()});


/**
 * Factore function to create a ShallowWrapper
 * for app component
 * @function setup
 * @param {object} props  - component props specific to the setup
 * @param {object} state  - initial state for the setup
 */

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if ( state ) wrapper.setState(state)
  return wrapper;
}

/**
 * Returns ShallowWrapper containing node(s) with the given
 * data-test value.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Target for searching a data-test value
 * @param {string} val - Value of the data-test attribute for search.
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}


test('renders app without an error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
