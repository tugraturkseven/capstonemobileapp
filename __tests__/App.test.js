import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';


jest.retryTimes(1);
jest.useFakeTimers();
jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({ children }) => children;
  return { KeyboardAwareScrollView };
});

describe('<App />', () => {

  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });


});
