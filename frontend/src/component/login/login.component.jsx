import { Container, Wrapper, LoginWrapper } from './login.style'

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <h1>React-News</h1>
        <LoginWrapper>
          <p>Login</p>
          <input type="text" placeholder="Username"></input>
          <input type="password" placeholder="password"></input>
          <button>Sign in</button>
          <a href="#">or sign up</a>
        </LoginWrapper>
      </Wrapper>
    </Container>
  )
}

export default Login
