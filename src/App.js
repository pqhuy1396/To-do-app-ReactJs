import {Component} from 'react';
import HeaderContainer from './containers/HeaderContainer';
import ProductsContainer from './containers/ProductsContainer';
import FooterContainer from './containers/FooterContainer';


class App extends Component  {
  render () {
    return (
            <div className="hidden-sn animated deep-purple-skin">
             {/*Header*/}
             <HeaderContainer/>
             {/*Products */}
             <ProductsContainer/>
            {/*Footer*/}
            <FooterContainer/>
        </div>
    );
  }
}

export default App;
