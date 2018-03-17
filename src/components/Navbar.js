import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  ${'' /* background: #19212b !important; */}
  background: var(--danger) !important;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`

const Hamburger = styled.button`
  background: rgba(0,0,0,0);
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

class DemoComponent extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  toggle = () => {
    this.props.toggle()
  }

  render() {
    return (
      <Nav className="px-4 navbar navbar-expand-lg bg-white">
        <a class="navbar-brand" href="/">
          <img src="https://logos-download.com/wp-content/uploads/2016/06/Tesco_Lotus_logo.png" height="40" alt="" />
        </a>
        <div className="collapse navbar-collapse" id="navbarText">
          <span className="navbar-text ml-auto">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link class="nav-link" to='/'>All Items</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/'>Meat</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/'>Vegetables</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/'>Fruits</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/'>Drinks</Link>
              </li>
              <li class="nav-item">
                <span class="nav-link disabled" href="#">สวัสดี, Kongpon</span>
              </li>
            </ul>
          </span>
        </div>
      </Nav>
    )
  }
}

export default DemoComponent
