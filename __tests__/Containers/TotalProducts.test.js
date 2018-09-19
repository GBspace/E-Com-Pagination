import React from 'react';
import {TotalProducts} from '../../src/Containers/TotalProducts';
import {shallow} from 'enzyme';

test('should render TotalProducts component correctly with value 100',()=>{
    const wrapper=shallow(<TotalProducts totalProd={10} />);
    expect(wrapper).toMatchSnapshot();
});