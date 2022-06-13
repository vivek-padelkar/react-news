import styled from 'styled-components'
import { constantStyle } from '../../constantStyle'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${constantStyle.MainBkgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 50%;
  height: 50%;
  background-color: ${constantStyle.BkgColor1};
  h1 {
    color: ${constantStyle.txtColor};
    text-align: center;
  }
`
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: Center;

  input {
    padding: 10px;
    margin: 10px;
  }

  button {
    background-color: ${constantStyle.btnColor};
    border: none;
    border-radius: 10px;
    padding: 10px;
    width: 20%;
    color: #fff;
    font-weight: 600;
    margin-top: 10px;
    cursor: pointer;
    transition: all 250ms ease-in;
    :hover {
      background-color: ${constantStyle.hoverBkgColor};
    }
  }

  a {
    text-decoration: none;
    color: ${constantStyle.btnColor};
    font-weight: 600;
    margin-top: 10px;
    transition: all 250ms ease-in;
    :hover {
      color: #df7139;
    }
  }
`
