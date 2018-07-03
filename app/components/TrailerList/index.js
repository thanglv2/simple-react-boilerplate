// @flow

import * as React from 'react';
import { URL_YOUTUBE } from './const';

type Props = {
  trailers: Array<Object>
}
const TrailerList = ({ trailers }: Props) =>
  trailers.map(trailer => <iframe title={trailer.key} src={`${URL_YOUTUBE}${trailer.key}`} allowFullScreen key={trailer.key} />)


export default TrailerList
