import React from 'react'
import { StyledGrid } from '../../../utils/commonStyle'
import Header from '../../containers/Header'
import UserForm from '../UserForm'
import Footer from '../Footer';

const EditProfile = () =>
  (
    <React.Fragment>
      <Header />
      <StyledGrid>
        <UserForm />
      </StyledGrid>
      <Footer />
    </React.Fragment>
  )

export default EditProfile
