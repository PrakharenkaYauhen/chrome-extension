import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
  const {
    customizationSiteBackgroundPhoto,
    pageForTheSlideWindow,
  } = state;

  return {
    customizationSiteBackgroundPhoto,
    pageForTheSlideWindow,
  };
};

const AppCNT = connect(mapStateToProps)(App);

export default AppCNT;
