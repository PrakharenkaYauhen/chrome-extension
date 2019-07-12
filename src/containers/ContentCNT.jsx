import { connect } from 'react-redux';
import Content from '../components/Content';

const mapStateToProps = (state) => {
  const {
    linksArray,
  } = state;

  return {
    linksArray,
  };
};

const ContentCNT = connect(mapStateToProps)(Content);

export default ContentCNT;
