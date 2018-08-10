import React from 'react'
import { Col, Row } from 'reactstrap'
import styled from 'styled-components'

const StyledFooter = styled.div`
  align-items: center;
  margin-top: 15px;
  background-image: url('https://www.themoviedb.org/assets/1/v4/footers_v2/TheBreakfastClub-b6e6bf8b7c3e3ba4e36894258e99d0d4e751c5149083b80df634b19046c56dd6.jpg'), radial-gradient(at 30% top, rgba(7, 64, 52, 1) 0%, rgba(8, 28, 36, 1) 70%);
  div div h3 {
    font-weight: bold;
    font-size: 1em;
    line-height: 3em;
    text-transform: uppercase;
    color: #fff;
    white-space: nowrap;
  }
  div div ul {
    list-style-type: none;
    padding: 0;
  }
  div div ul li a {
    font-size: 1em;
    color: #fff;
    text-decoration: none;
    font-weight: normal;
  }
  div {
    margin-left: 0;
    margin-right: 0;
  }
`

const StyledRow = styled(Row)`
    display: flex;
    justify-content: space-between;
    padding: 40px;
`
const Footer = () =>
  (
    <StyledFooter className="container-fluid">
      <StyledRow>
        <div>
          <h3>The Basics</h3>
          <ul>
            <li><a href="#">About TMDb</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support Forums</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#" rel="noopener">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3>Get Involved</h3>
          <ul>
            <li><a href="#"><span className="glyphicons glyphicons-asterisk" /> Contribution Bible</a></li>
            <li><a href="#">3rd Party Applications</a></li>
            <li><a href="#">Add New Movie</a></li>
            <li><a href="#">Add New TV Show</a></li>
          </ul>
        </div>
        <div>
          <h3>Community</h3>
          <ul>
            <li><a href="#">Guidelines</a></li>
            <li><a href="#">Leaderboard</a></li>
            <li><a href="#">Forums</a></li>
            <li><a href="#" rel="noopener">Twitter</a></li>
            <li><a href="#" rel="noopener">Facebook</a></li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li><a href="/documentation/website/terms-of-use">Terms of Use</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
      </StyledRow>
    </StyledFooter>
  )

export default Footer
