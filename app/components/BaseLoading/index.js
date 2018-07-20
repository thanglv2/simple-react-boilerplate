// @flow

import * as React from 'react';
import Loading from '../Loading'

type Props = {
  loading: boolean,
  children: React.Element<>
}
const BaseLoading = ({ loading, children }: Props) => (loading ? <Loading /> : children)

export default BaseLoading;
