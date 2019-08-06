import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
  const {
    customizationSiteBackgroundPhoto,
    authWindowVision,
  } = state;

  return {
    customizationSiteBackgroundPhoto,
    authWindowVision,
  };
};

const AppCNT = connect(mapStateToProps)(App);

export default AppCNT;
