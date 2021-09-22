import {Component} from 'react';
import { connect } from 'react-redux';
import Footer from '../component/Footer'

class FooterContainer extends Component  {

  render () {
    return (
      <Footer/>
    );
  }
}

  const mapStateToProps = (state) => {
    return {
    }
}


export default connect(mapStateToProps,null)(FooterContainer);