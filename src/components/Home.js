import React from 'react'
import styled from 'styled-components'
import Checkout from './Checkout'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import * as cartActions from '../redux/modules/counter'
import data from '../data'

const ABC = styled.div`
  max-height: 400px;
  overflow-y: scroll;
`
const Grid = styled.div`
  display: grid;
  ${'' /* grid-template-columns: repeat(4, 1fr); */}
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1em;
  height: auto;
  ${'' /* padding: 1em; */}
  width: calc(100vw - 420px - 3em);
`
const Name = styled.h5`
  position: relative;
  padding-top: .5em;
  font-family: 'Kanit', serif !important;
  &::after {
    position: absolute;
    bottom: -.3em;
    left: 0;
    content: "";
    width: 100%;
    height: 4px;
    ${'' /* background: var(--danger); */}
    background: brown;
  }
`

const Cart = styled.div`
  position: fixed;
  ${'' /* right: 0; */}
  top: 90px;
  width: 420px;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
`

const A = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  width: 420px;
`


const Flex = styled.div`
  ${'' /* display: flex; */}
  ${'' /* justify-content: space-between; */}
  position: relative;
  @media (max-width: 1024px) {
    ${Cart} {
      display: none;
    }
    ${Grid} {
      width: 100%;
    }
  }
`

const White = styled.div`
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: none;
    color: white;
  }
`

const Card = styled.div`
  ${'' /* background: rgba(0, 0, 0, 0.3); */}
  ${'' /* background: rgb(74,161,118) !important; */}
  background: white;
  padding: .5em;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
  ${'' /* color: white; */}
  font-family: 'Montserrat', serif;
  & > button {
    background: rgb(74,161,118) !important;
    color: white;
  }
`

class DemoComponent extends React.Component {

  componentDidMount = () => {
    this.props.setCart(JSON.parse(localStorage.getItem('list')) || [])
  }

  componentWillUnmount = () => {}

  add = (index) => {
    this.props.addItem({ index, ...data[index], amount: 1 })
  }

  render() {
    return (
      <div className="p-3">
        <Flex>
          <Grid>
            {data.map((item, i) => (
              <Card>
                <img className="img-fluid" src={item.src} alt=""/>
                <Name>{item.name}</Name>
                <div>{item.description}</div>
                <div><b>Price:{' '}</b>{item.price} THB</div>
                <button  onClick={() => { this.add(i) }} className="pt-2 btn btn-block">
                  {/* Add to cart */}
                  Add to cart<i style={{transform: 'scale(1.3)'}} class="pl-2 fa fa-cart-plus" aria-hidden="true"></i>

                </button>
              </Card>
            ))}
          </Grid>
          <A>
            <Cart className="">
              <ABC>
                <Checkout full={false}/>
              </ABC>
              <Link to='/checkout' style={{textDecoration:'none', display: 'block', height: '100%'}}>
                <button className="btn btn-success btn-block">
                  <White>
                      View Cart ( {this.props.list.length} )
                  </White>
                </button>
              </Link>
            </Cart>
          </A>
        </Flex>
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
