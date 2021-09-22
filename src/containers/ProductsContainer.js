import { Component } from "react";
import { connect } from "react-redux";
import Products from "../component/Products";
import ProductsItems from "../component/Products/ProductsItems";
import PropTypes from "prop-types";
import { addToCart} from '../Redux/Action/index';

class ProductsContainer extends Component {
  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductsItems key={index} product={product} addToCart={this.props.addToCart} />;
      });
    }
    return result;
  };
  render() {
    var { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      showRating: PropTypes.array.isRequired,
    })
  ).isRequired,
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product,1))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
