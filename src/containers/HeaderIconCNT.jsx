// Container HeaderIconCNT

import { connect } from 'react-redux';
import HeaderIcon from '../components/HeaderIcon';
import { toggleIconsActions } from '../actions';
import { toggleAsideCustomiztion } from '../actions';

const mapStateToProps = (state, props) => {
  const {
    iconsActions,
  } = state;

  const {
    image,
    icon,
  } = props;

  return {
    iconsActions,
    image,
    icon,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleIcons: iconsActions => {
      let action = {
        iconsActions: !iconsActions,
      }
      dispatch(toggleIconsActions(action));
    },

    toggleCustomization: () => {
      let action = {
        customizationAside: true,
      }
      dispatch(toggleAsideCustomiztion(action));
    }
  }
}

const HeaderIconCNT = connect(mapStateToProps, mapDispatchToProps)(HeaderIcon);

export default HeaderIconCNT;
