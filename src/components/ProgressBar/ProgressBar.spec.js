import React from 'react';
import ProgressBar from './ProgressBar';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';

configure({ adapter: new Adapter() });

describe('ProgressBar', () => {
  test('getWidthAsPercentOfTotalWidth should retunr 250 with total width of 500 and percent of 50', () => {
    const wrapper = shallow(<ProgressBar percent={50} width={500} />);
    const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
    expect(width).toEqual(250);
  });
});
