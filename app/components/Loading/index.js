import * as React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 100%;
  position: relative;
  background: #f6f8fa;
`

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: block;
  margin: auto;
`

const Loading = () => (
  <React.Fragment>
    <StyledDiv>
      <StyledIframe src="https://giphy.com/embed/jAYUbVXgESSti" frameBorder="0" className="giphy-embed" allowFullScreen />
    </StyledDiv>
  </React.Fragment>
)

export default Loading
