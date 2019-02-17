import { connect } from 'react-redux';
import DocComponent from '../components/DocComponent.jsx';

const mapStateToProps = state => {
  const { currentCount } = state.home;
  return { currentCount }
};

const mapDispatchToProps = dispatch => {
  
  return {
  }
};

const DocContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocComponent);

export default DocContainer;