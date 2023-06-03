import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from '../screens/LoginScreen';

jest.retryTimes(1);
jest.useFakeTimers();
jest.mock('react-native-keyboard-aware-scroll-view', () => {
    const KeyboardAwareScrollView = ({ children }) => children;
    return { KeyboardAwareScrollView };
});


describe('<LoginScreen />', () => {

    it("renders correctly", () => {
        const tree = renderer.create(<LoginScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });


});