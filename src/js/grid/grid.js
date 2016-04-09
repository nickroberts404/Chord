import React from 'react';
import Row from './row.js';

export default class Grid extends React.Component {
	render() {
		var rows = [];
		for (var i = 0; i < this.props.rows; i++) {
			rows.push(<Row columns={this.props.columns} />);
		}
		return (
			<div className="grid">
				{rows}
			</div>
		);
	}
}

