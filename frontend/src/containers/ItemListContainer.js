import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators as itemActions } from "store/modules/item";
import { ItemList } from "components";

class ItemListContainer extends Component {
  state = {
    feedList: []
  };

  componentDidMount() {
    const { feedItem } = this.props;
    feedItem();
  }

  render() {
    const { feed } = this.props;
    console.log(feed);
    return (
      <div>
        <ul>
          {feed.map(item => {
            return (
              <ItemList
                creator={item.creator.username}
                subject={item.subject}
                content={item.content}
                key={item.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { feed } = state.item;
  return {
    feed
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
