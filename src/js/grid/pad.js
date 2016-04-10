import React from 'react';

export default class Pad extends React.Component {
	render() {
		return (
			<div 
				className={"pad"+(this.props.active ? " active" : "")+(this.props.activePad ? " active-pad" : "")}
				onClick={() => this.props.onClick(this.props.column, this.props.row)}
			></div>
		);
	}
}

