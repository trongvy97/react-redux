import React,{Component} from 'react';

import {connect} from 'react-redux';
import CartItem from './../Components/CartItem';
import PropTypes from 'prop-types';
import Cart from './../Components/Cart';
import CartResult from './../Components/CartResult';
import * as Message from './../constants/Message';
import {  AtcDeleteProductInCart, ActChangeMessage, AtcUpdateProductInCart } from '../actions';
import message from '../reducers/message';


class CartContainer extends Component {
    render(){
      var {cart, } = this.props;
   
  return (
          <Cart> 
          {this.showCartItem(cart)}
          {this.showTotalAmount(cart)}
          
          </Cart>
        );
  }
   
  showCartItem = (cart) => {
    var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
    var result = <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
    </tr>
    if(cart.length > 0) {
      result = cart.map((item,index) => {
        return (
          <CartItem
           key={index} 
          item = {item} // san pham di kem vs so luong
          index = {index}
          onDeleteProductInCart = {onDeleteProductInCart}
          onChangeMessage = {onChangeMessage}
          onUpdateProductInCart = {onUpdateProductInCart}
          />

        )
      })
    }
    return result
  };
      
  showTotalAmount = (cart) => {
    var result = null;
    if(cart.length > 0) {
      result = <CartResult cart={cart}/>
    }
    return result
  }

}
// kiem tra loai du lieu
CartContainer.propTypes = {
   cart : PropTypes.arrayOf(PropTypes.shape({
    product : PropTypes.shape({
      id : PropTypes.number.isRequired,
      name : PropTypes.string.isRequired,
      image : PropTypes.string.isRequired,
      description : PropTypes.string.isRequired,
      price : PropTypes.number.isRequired,
      inventory : PropTypes.number.isRequired,
      rating : PropTypes.number.isRequired
    }).isRequired,
    quantity : PropTypes.number.isRequired
   })).isRequired, // isRequied bat buoc phai co 
   onDeleteProductInCart  : PropTypes.func.isRequired,
   onChangeMessage  : PropTypes.func.isRequired,
   onUpdateProductInCart  : PropTypes.func.isRequired
  }


const mapStateToProps = state => {
  return {
    cart : state.cart
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart :  (product) => {
      dispatch(AtcDeleteProductInCart(product))
    },
    onChangeMessage : (message) => {
      dispatch (ActChangeMessage(message))
    }, 
    onUpdateProductInCart : (product, quantity) => {
      dispatch(AtcUpdateProductInCart(product,quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
// export default Products;
