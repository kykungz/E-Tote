import React, { Component } from 'react'
import styled from 'styled-components'
import Checkout from './Checkout'
import Bottombar from './Bottombar'
import data from '../data'
import {connect} from 'react-redux'
import * as cartActions from '../redux/modules/counter'

const Padding = styled.div`
  padding: 1em;
  padding-top: 2em;
  padding-bottom: 100px;
`

class DemoComponent extends React.Component {
  componentDidMount = () => {
    console.log(this.props.match)

    if (this.props.match.params.list) { // เข้าผ่านลิ้ง
      const list = this.props.match.params.list.split('-').map((item, i) => {
        const index = item.split('x')[0]
        const amount = parseInt(item.split('x')[1])
        return { index, ...data[index], amount }
      })
      this.props.setCart(list)
    } else { // เข้ามาเอง
      console.log('hi')
      this.props.setCart(JSON.parse(localStorage.list) || [])
    }
  }

  componentWillUnmount = () => {}

  render() {
    return (
      <Padding>
        <Checkout full={true}/>
        <Bottombar list={this.props.list} />
      </Padding>
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
