import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav.attrs({
  id: 'nav'
})`
  ${'' /* background: #19212b !important; */}
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-top: thick solid hsl(150, 43%, 36%);
  a {
    color: black !important;
  }
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

  componentDidMount = () => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY)
      if (window.scrollY > 200) {
        document.getElementById('nav').classList.add('transparent')
      } else {
        document.getElementById('nav').classList.remove('transparent')
      }
    })
  }

  componentWillUnmount = () => {}

  toggle = () => {
    this.props.toggle()
  }

  render() {
    return (
      <Nav className="px-4 navbar sticky-top navbar-expand-lg tesco-nav">
        <Link class="navbar-brand" to='/'>
          <img src="https://logos-download.com/wp-content/uploads/2016/06/Tesco_Lotus_logo.png" height="40" alt="" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <span className="navbar-text ml-auto">
            <ul class="text-black navbar-nav mr-auto">
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
                <Link class="nav-link" to='/'>Cart</Link>
              </li>
              <li class="nav-item">
                <span class="nav-link disabled" href="#">Mae Ploy</span>
              </li>
            </ul>
          </span>
        </div>
      </Nav>
    )
  }
}

export default DemoComponent
