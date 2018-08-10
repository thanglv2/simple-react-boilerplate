import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import MovieDetail from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('MovieDetail component', () => {
  const mockProps = {
    match: {
      params: {
        id: 1,
      },
    },
  };

  const component = shallow(<MovieDetail {...mockProps} />);

  it('should match snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
