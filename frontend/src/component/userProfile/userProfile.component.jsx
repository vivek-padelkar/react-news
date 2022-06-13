import { Button } from '@mui/material'
import {
  Container,
  Wrapper,
  PlaceHolder,
  StyledTextField,
} from './userProfile.style'
import MuiPhoneNumber from 'material-ui-phone-number'
import { useState } from 'react'

const UserProfile = () => {
  const [phoneNo, setPhoneNo] = useState(null)
  const handleSubmit = (e) => {
    e.prventDefault()
    console.log('hi')
  }

  const handleOnChange = (value) => {
    setPhoneNo(value)
  }

  return (
    <Container>
      <h2>User Profile</h2>

      <Wrapper>
        <form onSubmit={handleSubmit}>
          <PlaceHolder>
            UserName
            <StyledTextField size="small" required />
          </PlaceHolder>

          <PlaceHolder>
            Email
            <StyledTextField size="small" type="email" required />
          </PlaceHolder>

          <PlaceHolder>
            Password
            <StyledTextField size="small" type="password" required />
          </PlaceHolder>

          <PlaceHolder>
            Phone Number
            <MuiPhoneNumber
              defaultCountry={'in'}
              onChange={handleOnChange}
              required
            />
          </PlaceHolder>

          <PlaceHolder>
            Gender
            <StyledTextField size="small" />
          </PlaceHolder>

          <PlaceHolder>
            Language
            <StyledTextField size="small" />
          </PlaceHolder>

          <PlaceHolder>
            Language
            <StyledTextField size="small" />
          </PlaceHolder>

          <PlaceHolder>
            Martial Status
            <StyledTextField size="small" />
          </PlaceHolder>

          <PlaceHolder>
            Date of Birth
            <StyledTextField size="small" />
          </PlaceHolder>

          <PlaceHolder>
            Time of Birth
            <StyledTextField size="small" />
          </PlaceHolder>

          <button type="submit" className='btnSubmit'>SUBMIT</button>
        </form>
      </Wrapper>
    </Container>
  )
}

export default UserProfile
