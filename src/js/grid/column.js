import React from 'react';
import Pad from './pad.js';

export default class Column extends React.Component {
	render() {
		var pads = [];
		for (var i = 0; i < this.props.rows; i++) {
			pads.push(<Pad 
				active={this.props.active}
				activePad={this.props.column[i]}
				column={this.props.columnNum}
				onClick={this.props.togglePad}
				row={i}
			/>);
		}
		return (
			<div className="column">
				{pads}
			</div>
		);
	}
}

