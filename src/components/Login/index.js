import './index.css'

import {Component} from 'react'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {username: '', password: '', errorMsg: ''}
  setAuthorization = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', {jwtToken}, {expires: 30})
    history.replace('/')
  }

  changeUserName = event => {
    this.setState({username: event.target.value})
  }
  changePassword = event => {
    this.setState({password: event.target.value})
  }
  requestToHome = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const UserDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }

    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      const dbResponse = await response.json()
      console.log(dbResponse)
      this.setAuthorization(dbResponse.jwt_token)
    } else {
      this.setState({errorMsg: "Username and Pssword Didn't Match"})
    }
  }
  render() {
    const {errorMsg} = this.state

    return (
      <div className="bg-container">
        <form className="login-container" onSubmit={this.requestToHome}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <label htmlFor="userName">USERNAME</label>
          <input
            type="text"
            id="userName"
            onChange={this.changeUserName}
          />{' '}
          <br />
          <label htmlFor="password">PASSWORD</label>
          <input type="text" id="password" onChange={this.changePassword} />
          <br />
          <button className="submit-button" type="submit">
            Login
          </button>
          <p className="err-msg">{errorMsg}</p>
        </form>
      </div>
    )
  }
}
export default Login
