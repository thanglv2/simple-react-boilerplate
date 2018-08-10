// @flow
import * as React from 'react';
import styled from 'styled-components'

const BtnLanguage = styled.span`
  background: none;
  color: #ffffffb5;
  cursor: pointer;
  display: inline-flex;
  position: relative;
  align-items: center;
  line-height: 1;
  margin-right: 7px;
  
`

export const ButtonLanguage = ({ setLanguage }: Function) =>
  (
    <React.Fragment>
      <BtnLanguage onClick={() => setLanguage('en')}>EN</BtnLanguage>
      <BtnLanguage onClick={() => setLanguage('vi')}>VI</BtnLanguage>
    </React.Fragment>
  )
