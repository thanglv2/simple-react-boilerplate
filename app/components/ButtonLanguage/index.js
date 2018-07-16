// @flow
import * as React from 'react';
import { Button } from 'react-bootstrap'

export const ButtonLanguage = ({ setLanguage }: Function) =>
  (
    <React.Fragment>
      <Button onClick={() => setLanguage('en')} bsStyle="primary">EN</Button>&nbsp;
      <Button onClick={() => setLanguage('vi')} bsStyle="success">VI</Button>&nbsp;
    </React.Fragment>
  )
