import { connect } from 'react-redux'
import Weather from '../components/Weather'

// const HeaderCNT = connect(mapStateToProps, mapDispatchToProps)(Header);
const WeatherCNT = connect()(Weather);

export default WeatherCNT;
