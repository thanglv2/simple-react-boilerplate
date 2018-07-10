import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import withReducer from '../withReducer';

Enzyme.configure({ adapter: new Adapter() });

describe('withReducer', () => {
  it('should return a wrappedComponent', () => {
    let key;
    let props;
    let reducer;
    const context = {
      store: {
        injectReducer: jest.fn(key, reducer),
      },
    };
    const MockComponent = () => <div>Component</div>;
    const WrapperComponent = withReducer(key, reducer)(MockComponent);
    const wrapper = shallow(<WrapperComponent {...props} />, { context });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
