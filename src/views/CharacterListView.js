import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getStuff } from '../actions/index'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getStuff()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h2>LOADING STAR WARS PEEPS</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

function mapStateToProps(state) {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  }
}

export default connect(
  mapStateToProps,
  {
    getStuff
  }
)(CharacterListView);
