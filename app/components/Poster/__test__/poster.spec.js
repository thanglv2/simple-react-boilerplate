import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Poster from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Poster />', () => {
  const mockProps = {
    movie: {
      item: {
        overview: 'this is overview',
        original_title: '',
        release_date: '',
      },
    },
  };

  const component = shallow(<Poster {...mockProps} />);
  it('should return a p tag with overview value less than 300 character', () => {
    expect(component.find('p').first().text()).toEqual('this is overview');
  })

  it('should return a p tag with overview value more than 300 character', () => {
    component.setProps({
      movie: {
        item: {
          overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
      },
    })
    expect(component.find('p').first().text()).toEqual("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It h...");
  })
})
