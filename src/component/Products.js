import {Component} from 'react';
import Message from './Products/Message';
import CartContainer from '../containers/CartContainer'

class Products extends Component  {
  render () {
    return (
      <main id="mainContainer">
      <div className="container">
          <section className="section">
              <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
              <div className="row">
                  {/* ProductsItems*/}
                  {this.props.children}
              </div>
          </section>
          {/* Message*/}
          <Message/>
          {/* Cart*/}
          <CartContainer/>
      </div>
  </main>
    );
  }
}



export default Products;
