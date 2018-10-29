import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { router } = state;
  return {
    pathname: router.location.pathname
  };
};

export default connect(mapStateToProps)(Container);
