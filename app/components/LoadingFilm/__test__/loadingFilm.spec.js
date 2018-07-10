import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import LoadingFilm from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('LoadingFilm component', () => {
  const component = shallow(<LoadingFilm />);

  it('should ...', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
