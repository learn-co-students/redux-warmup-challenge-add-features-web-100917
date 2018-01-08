import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

const MuseumPicker = ({fetchPaintings, filterPaintings}) => {

	const handleAll = (event) => {
		fetchPaintings()
	}

	const filter = (event) => {
		filterPaintings(2)
	}
  return (
    <div className="row">
      <div className="ui menu">
        <div className="item" onClick={handleAll}>All Museums</div>
        <div className="item" onClick={filter}>National Gallery of Art, Washington D.C.</div>
      </div>
    </div>
  );
};

export default connect(null, actions)(MuseumPicker);
