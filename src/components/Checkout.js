import React from 'react'
import styled from 'styled-components'
import Navbar  from './Navbar'
import Bottombar from './Bottombar'
import data from '../data'
import {connect} from 'react-redux'

import * as cartActions from '../redux/modules/counter'

const Table = styled.table`
  ${'' /* background: #2d2d2d !important; */}
  background: white !important;
  ${props => !props.full && `font-size: 12px`}
  & > thead {
    ${props => !props.full && `display: none`}
  }
  margin-bottom: 0 !important;
`

const TableWrapper = styled.div`
  margin: auto;
  ${'' /* margin-bottom: 4em !important; */}
  max-width: 900px;
  ${props => props.full && 'padding: 2em;'}
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  background: rgb(0,0,0,0.1) !important;
`

const TableRow = styled.tr`
  & > td, & > th {
    ${props => props.full && `padding: 2em 1em !important;`}
    border: none !important;
  }
`

const Image = styled.img.attrs({
  className: `${props => props.full && 'img-fluid'}`
})`
  max-height: ${props => props.full ? '100px' : '30px'};
`

const Wrapper = styled.div`
  ${'' /* max-width: 900px; */}
  ${'' /* padding: 2em; */}
  ${'' /* max-width: 900px; */}
  margin: auto;
  display: flex;
  justify-content: center;
  ${'' /* flex-direction: column */}
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Item = styled.div`
  padding: 1em;
  width: 100%;
  background: white;
  margin: .5em;
  border-radius: 4px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Right=  styled.div`
  float: right;
`
class DemoComponent extends React.Component {

  componentDidMount = () => {
    // const list = this.props.match.params.list.split('-').map((item, i) => {
    //   const index = item.split('x')[0]
    //   const amount = parseInt(item.split('x')[1])
    //   return { index, ...data[index], amount }
    // })
    // this.setState({ list }, () => {
    //   console.log(this.state)
    // })
    // this.setState({
    //   list: [...this.state.list, ...this.state.list, ...this.state.list,]
    // })
  }

  removeItem = (index) => {
    this.props.removeItem(index)
    // this.setState(prevState => ({
    //   list: prevState.list.filter((item, i) => i !== index)
    // }))
  }

  handleChange = (e, i) => {
    const amount = e.target.value
    const newList = [...this.props.list]
    newList[i].amount = amount
    this.props.setCart(newList)
  }

  render() {
    return (
      <div>
        <Wrapper>
          <div className="table-responsive">

            <TableWrapper>
              <Table full={this.props.full} className="table table-hover">
                <thead>
                  <tr>
                    <th>
                      {this.props.full ? 'No.' : ''}
                    </th>
                    <th scope="col">Product</th>
                    <th scope="col">
                      {this.props.full ? 'Description' : ''}
                    </th>
                    <th scope="col">Price</th>
                    <th className="text-center" scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.list.map((item, i) =>
                    <TableRow>
                      {this.props.full ? <th scope="row">{i+1}</th> : ''}

                      <td>
                        <Image full={this.props.full} src={item.src} alt=""/>
                      </td>
                      <td>
                        <a href="">{item.name}</a>
                        {
                          this.props.full &&
                            <span>
                                <br/>
                                <p>{item.description}</p>
                            </span>
                        }
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <div className="input-group-sm">
                          <input style={{minWidth: '60px'}} type="number" class="form-control text-center" onChange={(e) => { this.handleChange(e, i) }} value={item.amount}/>
                        </div>
                      </td>
                      <td>${ parseInt(item.price) * parseInt(item.amount) }</td>
                      <td className="actions" data-th="">
                        <button onClick={() => {this.removeItem(i)}} class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
                      </td>
                    </TableRow>
                  )}
                </tbody>
              </Table>
            </TableWrapper>
          </div>
        </Wrapper>
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
