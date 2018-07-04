import styled from 'styled-components';
import { Grid, Image } from 'react-bootstrap';

export const StyledGrid = styled(Grid)`
  margin-top: 30px;
`
export const StyledImage = styled(Image)`
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 100%;
  
  &:hover {
    .meta {
      visibility: visible;
    }
  }
`
