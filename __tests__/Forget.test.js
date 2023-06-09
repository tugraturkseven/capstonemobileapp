import React from 'react';
import renderer from 'react-test-renderer';
import Forget from '../screens/Forget';

jest.retryTimes(1);
jest.useFakeTimers();
jest.mock('react-native-keyboard-aware-scroll-view', () => {
    const KeyboardAwareScrollView = ({ children }) => children;
    return { KeyboardAwareScrollView };
});


describe('<Forget />', () => {

    it("renders correctly", () => {
        const tree = renderer.create(<Forget />).toJSON();
        expect(tree).toMatchSnapshot();
    });


});