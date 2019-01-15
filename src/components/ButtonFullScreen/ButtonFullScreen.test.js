import React from "react";
import {shallow, mount, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { ButtonFullScreen } from "./ButtonFullScreen";

configure({ adapter: new Adapter() });

const result = mount(<ButtonFullScreen />);

describe('component ButtonFullScreen:', () => {
    test('renders without crashing', () => {
        shallow(<ButtonFullScreen />);
    });
    
    test('should have 1 button element', () => {
        expect(result.find('button')).toHaveLength(1);
    });
});
