import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const PaintingShow = ({ painting, deletePainting, paintings }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={painting.image} alt={painting.slug} />
      </div>
      <div className="content">
        <div className="header">{painting.title}</div>
        <div className="meta">{painting.date}</div>
        <div className="meta">
          {painting.dimensions.width} in. x {painting.dimensions.height} in.
        </div>
        <div className="meta">{painting.museum.name}</div>
        <div className="description">
          by {painting.artist.name}
          <p>
            {painting.artist.birthday} - {painting.artist.deathday}
          </p>
          <p>{painting.artist.hometown}</p>
        </div>
        <div
          onClick={() => deletePainting(paintings, painting.id)}
          className="ui basic red right aligned button"
        >
          Delete
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  paintings: state.paintings,
  activePainting: state.paintings.find(p => p.id === state.activePaintingId)
});

export default connect(mapStateToProps, actions)(PaintingShow);
