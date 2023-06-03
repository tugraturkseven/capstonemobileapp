import React from 'react';
import renderer from 'react-test-renderer';
import Register from '../screens/Register';

jest.retryTimes(1);
jest.useFakeTimers();
jest.mock('react-native-keyboard-aware-scroll-view', () => {
    const KeyboardAwareScrollView = ({ children }) => children;
    return { KeyboardAwareScrollView };
});


describe('<Register />', () => {

    it("renders correctly", () => {
        const tree = renderer.create(<Register />).toJSON();
        expect(tree).toMatchSnapshot();
    });


});