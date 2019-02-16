import { connect } from 'react-redux';
import HomeComponent from '../components/HomeComponent.jsx';

const mapStateToProps = state => {
  const { currentCount } = state.home;
  return { currentCount }
};

const mapDispatchToProps = dispatch => {
  
  return {
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;