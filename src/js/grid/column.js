import React from 'react';
import Pad from './pad.js';

export default class Column extends React.Component {
	render() {
		var pads = [];
		for (var i = 0; i < this.props.rows; i++) {
			pads.push(<Pad active={this.props.active}/>);
		}
		return (
			<div className="column">
				{pads}
			</div>
		);
	}
}

