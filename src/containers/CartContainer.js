import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../component/Products/Cart";
import * as message from "../Redux/Constants/Message";
import CartItems from "../component/Products/Cart/CartItems";
import CartResult from "../component/Products/Cart/CartResult";
class CartContainer extends Component {
  showCartItem = (cart) => {
    var result = message.MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((item, index) => <CartItems key={index} item={item} />);
    }
    return result;
  };

  showTotal = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart}/>;
    }
    return result;
  };
  render() {
    var {cart} = this.props;
    return (
      <Cart>{this.showCartItem(cart)} {this.showTotal(cart)}</Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(CartContainer);
