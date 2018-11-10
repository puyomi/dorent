import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators as itemActions } from "store/modules/item";
import { ItemList } from "components";

class ItemListContainer extends Component {
  componentDidMount() {
    const { feedItem } = this.props;
    feedItem();
  }

  render() {
    const { feed } = this.props;
    return <ItemList feed={feed} />;
  }
}

const mapStateToProps = state => {
  const { feed } = state;
  return {
    feed: feed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    feedItem: () => {
      dispatch(itemActions.feedItem());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListContainer);
