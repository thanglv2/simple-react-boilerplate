import { takeLatest, put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { FETCH_RECOMMENDATIONS } from '../constant';
import { recommendationsApi } from '../service'
import { fetchRecommendationsSuccess, fetchRecommendationsFail } from '../action';
import { watchFetchRecommendations, fetchRecommendations } from '../saga'

describe('watchFetchRecommendations()', () => {
  const gen = cloneableGenerator(watchFetchRecommendations)();

  it('should watch fetchRecommendations', () => {
    expect(gen.next().value).toEqual(takeLatest(FETCH_RECOMMENDATIONS, fetchRecommendations));
  })
})

describe('fetchRecommendations', () => {
  let id;
  const action = {
    id,
  }
  const gen = cloneableGenerator(fetchRecommendations)(action);

  it('should call recommendationsApi', () => {
    expect(gen.next().value).toEqual(call(recommendationsApi, id))
  })

  it('should put fetchRecommendationsSuccess', () => {
    const clone = gen.clone();
    const response = {
      data: {
        results: [],
      },
    }

    expect(clone.next(response).value).toEqual(put(fetchRecommendationsSuccess(response.data.results)))
  })

  it('should put fetchRecommendationsFail', () => {
    const error = new Error('error');
    const clone = gen.clone();

    expect(clone.throw(error).value).toEqual(put(fetchRecommendationsFail(error)));
  })
})
