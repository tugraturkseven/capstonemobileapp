import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from '../screens/MainScreen';

jest.retryTimes(1);
jest.useFakeTimers();
jest.mock('react-native-keyboard-aware-scroll-view', () => {
    const KeyboardAwareScrollView = ({ children }) => children;
    return { KeyboardAwareScrollView };
});


describe('<MainScreen />', () => {

    it("renders correctly", () => {
        const tree = renderer.create(<MainScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });


});