// Container HeaderIconCNT

import { connect } from 'react-redux';
import HeaderIcon from '../components/HeaderIcon';
import { toggleIconsActions } from '../actions';
import { toggleAsideCustomiztion } from '../actions';

const mapStateToProps = (state, props) => {
  const {
    iconsActions,
    pageForTheSlideWindow,
  } = state;

  const {
    image,
    icon,
  } = props;

  return {
    iconsActions,
    pageForTheSlideWindow,
    image,
    icon,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleIcons: (iconsActions, icon, pageForTheSlideWindow) => {
      if(iconsActions && icon !== 'cross') return;
      // if(icon === 'cross') {
      //   icon = pageForTheSlideWindow;
      // }
      let action = {
        iconsActions: !iconsActions,
        pageForTheSlideWindow: icon,
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
