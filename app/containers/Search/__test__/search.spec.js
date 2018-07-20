import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAxios from 'axios';
import { searchMovieApi } from '../service';
import { SearchFilm } from '../index';

jest.mock('axios')
Enzyme.configure({ adapter: new Adapter() });

describe('<SearchFilm />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      history: {
        push: jest.fn(),
      },
      ...overrides,
    }

    component = shallow(<SearchFilm {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('onChange', () => {
    it('should call setState()', () => {
      const spy = jest.spyOn(instance, 'setState')
      let event;
      let newValue;
      instance.onChange(event, { newValue })
      expect(spy).toHaveBeenCalledTimes(1);
    })
  })

  describe('onSuggestionsFetchRequested', () => {
    it('should setState with new value', async () => {
      const spy = jest.spyOn(instance, 'setState')
      const value = 'v';
      const results = {};
      instance.onSuggestionsFetchRequested({ value })
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: {
            results,
          },
        }));

      await searchMovieApi(value);
      expect(spy).toHaveBeenCalled()
    })
    it('should reset suggestions', () => {
      const spy = jest.spyOn(instance, 'setState')
      const value = '';
      instance.onSuggestionsFetchRequested({ value })
      expect(spy).toHaveBeenCalledWith({ suggestions: [] })
    })
  })

  describe('onSuggestionsClearRequested', () => {
    it('should call setState', () => {
      const spy = jest.spyOn(instance, 'setState');
      instance.onSuggestionsClearRequested();
      expect(spy).toHaveBeenCalledWith({
        suggestions: [],
      })
    })
  })

  describe('onSuggestionSelected', () => {
    const suggestion = {
      id: 1,
      title: 'title',
    }
    it('should call history', () => {
      const method = 'enter'
      instance.onSuggestionSelected({ preventDefault: jest.fn() }, { suggestion, method })
      expect(instance.props.history.push).toHaveBeenCalledWith('/movie/1')
    })

    it('should not call history', () => {
      const method = 'space'
      instance.onSuggestionSelected({ preventDefault: jest.fn() }, { suggestion, method })
      expect(instance.props.history.push).not.toHaveBeenCalled()
    })
  })

  describe('getSuggestionValue', () => {
    it('should return title', () => {
      expect(instance.getSuggestionValue({ title: 'title' })).toEqual('title')
    })
  })

  describe('handleKeyDown', () => {
    it('should call hanldSubmit', () => {
      const spy = jest.spyOn(instance, 'handleSubmit')
      instance.setState({ value: 'value' })
      instance.handleKeyDown({ key: 'Enter' })
      expect(spy).toHaveBeenCalledWith('value')
    })
    it('should not call hanldSubmit', () => {
      const spy = jest.spyOn(instance, 'handleSubmit')
      instance.setState({ value: 'value' })
      instance.handleKeyDown({ key: 'Tab' })
      expect(spy).not.toHaveBeenCalled()
    })
  })

  describe('handleSubmit', () => {
    it('should call history', () => {
      instance.handleSubmit('searchText')
      expect(instance.props.history.push).toHaveBeenCalledWith('/search/searchText')
    })
  })

  describe('renderSuggestion', () => {
    it('should return a tag', () => {
      expect(instance.renderSuggestion({ poster_path: 'poster_path', title: 'title' }).type).toEqual('a')
    })
    it('should return a tag', () => {
      expect(instance.renderSuggestion({ poster_path: null, title: 'title' }).type).toEqual('a')
    })
  })
})
