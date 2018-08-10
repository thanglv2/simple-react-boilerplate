import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import CastsList from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('CastsList component', () => {
  const mockProps = {
    casts: [{
      id: 1,
      profile_path: 'hfdkjfd',
      character: 'fdo',
      name: 'fdjfkd',
    },
    ],
  };

  const component = shallow(<CastsList {...mockProps} />);

  it('should ...', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
