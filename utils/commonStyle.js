import styled from 'styled-components';
import { Container, Row } from 'reactstrap'

export const StyledGrid = styled(Container)`
  flex-grow: 1;
`
export const StyledImage = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 100%;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
  
  &:hover {
    .meta {
      visibility: visible;
    }
  }
`

export const StyledRow = styled(Row)`
  padding: 16px;
  overflow: auto;
  line-height: 1.45;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1);
`

export const StyledRowExt = StyledRow.extend`
  display: flex;
  flex-direction: column;
`
