import { connect } from 'react-redux';
import HeaderIcon from '../components/HeaderIcon';
import { toggleIconsActions, toggleAsideCustomiztion } from '../actions';

const mapStateToProps = (state, props) => {
  const {
    sliderWindowVision,
    pageForTheSlideWindow,
  } = state;

  const {
    image,
    icon,
  } = props;

  return {
    sliderWindowVision,
    pageForTheSlideWindow,
    image,
    icon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleIcons: (sliderWindowVision, icon) => {
      if (sliderWindowVision && icon !== 'cross') return;
      const action = {
        sliderWindowVision: !sliderWindowVision,
        pageForTheSlideWindow: icon,
      };
      dispatch(toggleIconsActions(action));
    },

    toggleCustomization: () => {
      const action = {
        customizationAside: true,
      };
      dispatch(toggleAsideCustomiztion(action));
    },
  };
};

const HeaderIconCNT = connect(mapStateToProps, mapDispatchToProps)(HeaderIcon);

export default HeaderIconCNT;
