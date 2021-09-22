import {Component} from 'react';
import { connect } from 'react-redux';
import Header from '../component/Header'

class HeaderContainer extends Component  {

  render () {
    return (
      <Header/>
    );
  }
}

  const mapStateToProps = (state) => {
    return {
    }
}


export default connect(mapStateToProps,null)(HeaderContainer);