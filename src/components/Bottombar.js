import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import * as cartActions from '../redux/modules/counter'

const Nav = styled.nav.attrs({
  id: 'bottom-nav'
})`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.3);
  height: 70px;
  padding-right: 2em;
  padding-left: 2em;
  padding-top: 14px;
  background: rgb(41, 41, 41) !important;
  font-family: 'Kanit', serif;
`

const Button = styled.button`
  font-size: 20px !important;
  margin-left: .5em;
`

class DemoComponent extends React.Component {
  state = {
    copied: false,
    link: ''
  }

  componentDidMount = () => {}

  componentWillUnmount = () => {}

  copy = () => {
    document.getElementById('aff-link').select()
    document.execCommand('Copy')
    this.setState({copied: true})
  }

  generateLink = () => {
    console.log(this.props.list)
    const link = window.location.origin + '/checkout/' + this.props.list.map((item, i) => `${item.index}x${item.amount}`).join('-')
    this.setState({ link })
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Share</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex justify-content-center align-items-center">
                <div className="w-100 text-center">
                  <h4>Your e-Tote is ready!</h4>
                  <div class="input-group mb-3">
                    <input style={{background: 'lightgray'}} id="aff-link" type="text" class="form-control" value={this.state.link} readonly />
                    <div class="input-group-append">
                      <button onClick={this.copy} class="btn btn-secondary" type="button">
                        <i class="fa fa-clipboard" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  {
                    this.state.copied &&
                    <h5 className="text-center text-success"><small>Copied!</small></h5>
                  }
                </div>

              </div>
              <div className="modal-footer">
                <button onClick={() => { this.setState({copied: false}) }}
                  type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <Nav>

          <Button className='float-right px-4 btn btn-danger'>Checkout</Button>
          <Button onClick={this.generateLink} type="button" className='px-4 btn btn-success' data-toggle="modal" data-target="#exampleModal">
            Share
          </Button>
          <h5 className="pt-2 text-white float-right">Total: $400</h5>
        </Nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.cart
})

const mapDispatchToProps = {
  ...cartActions // addItem(), removeItem(), setCart()
}

export default connect(mapStateToProps,mapDispatchToProps)(DemoComponent)
