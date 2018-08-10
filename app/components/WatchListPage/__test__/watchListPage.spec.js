import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import WatchListPage from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('WatchListPage component', () => {
  const mockProps = {
    bookMarkedMovies: [{
      id: 123,
      poster_path: 'http',
      overview: 'overvierw',
    },
    ],
  };

  const component = shallow(<WatchListPage {...mockProps} />);
  it('should match to snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should return overview with over 70 character', () => {
    component.setProps({
      bookMarkedMovies: [{
        id: 123,
        poster_path: 'http',
        overview: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
      },
      ],
    });
  })
});
