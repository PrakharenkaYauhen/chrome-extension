import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
  const {
    customizationSiteBackgroundPhoto
  } = state;

  return {
    customizationSiteBackgroundPhoto
  };
};

const AppCNT = connect(mapStateToProps)(App);

export default AppCNT;
