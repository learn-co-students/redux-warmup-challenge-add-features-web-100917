import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const MuseumPicker = props => {
  console.log(props);
  return (
    <div className="row">
      <div className="ui menu">
        <div onClick={() => props.selectMuseum(null)} className="active item">
          All Museums
        </div>
        <div onClick={() => props.selectMuseum(2)} className="item">
          National Gallery of Art, Washington D.C.
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    paintings: state.paintings,
    activePainting: state.paintings.find(p => p.id === state.activePaintingId),
    activeMuseum: state.activeMuseumId
  };
};

export default connect(mapStateToProps, actions)(MuseumPicker);
