import React,{Component} from 'react';
import Product from './../Components/Product';
import {connect} from 'react-redux';
import Products from './../Components/Products';
import PropTypes from 'prop-types';
import { ActAddToCart, ActChangeMessage} from './../actions/index';


class ProductContainer extends Component {
    render(){
        var { products } = this.props;
  return (
   
          <Products>
              {this.showProducts(products)}
          </Products>
        );
  }
        showProducts(products){
          var result = null;
          var { onAddToCart, onChangeMessage } = this.props;
          if(products.length > 0) {
              result = products.map((product, index) => {
              return <Product
               key={index}
                product = {product}
                onAddToCart = {onAddToCart}
                onChangeMessage = {onChangeMessage}
                />
              });
          }
          return result;
          }
    
       
}
// kiem tra loai du lieu
ProductContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
          id : PropTypes.number.isRequired,
          name : PropTypes.string.isRequired,
          image : PropTypes.string.isRequired,
          description : PropTypes.string.isRequired,
          price : PropTypes.number.isRequired,
          inventory : PropTypes.number.isRequired,
          rating : PropTypes.number.isRequired
        })
    ).isRequired,// isRequied bat buoc phai co
    onChangeMessage : PropTypes.func.isRequired,
    onAddToCart : PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    products : state.products // lay state {danh sach cac products}
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    onAddToCart : (product) => {
        dispatch(ActAddToCart(product, 1));
    },
    onChangeMessage : (message) => {
      dispatch(ActChangeMessage(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
// export default Products;
