import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import { constantStyle } from '../../constantStyle'

export const Container = styled.div`
  width: 30%;
  margin: 0 auto;
  color: ${constantStyle.txtColor};

  p,
  h2 {
    text-align: center;
  }
  /* h2 {
    text-align: center;
  } */
`
export const Wrapper = styled.div`
  background-color: ${constantStyle.MainBkgColor};
  .btnSubmit {
    background-color: ${constantStyle.btnColor};
    margin: 20px 0;
    border: none;
    border-radius: 10px;
    padding: 10px;
    width: 200px;
    transition: ${constantStyle.transition};
    :hover {
      background-color: ${constantStyle.hoverBkgColor};
    }
  }
`
export const UserName = styled.div``
export const PlaceHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const StyledTextField = styled(TextField)`
  margin-bottom: 10px;
`
