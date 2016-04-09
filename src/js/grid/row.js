import React from 'react';
import Pad from './pad.js';

export default class Grid extends React.Component {
	render() {
		var pads = [];
		for (var i = 0; i < this.props.columns; i++) {
			pads.push(<Pad />);
		}
		return (
			<div className="row">
				{pads}
			</div>
		);
	}
}

