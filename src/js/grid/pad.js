import React from 'react';

export default class Pad extends React.Component {
	render() {
		return (
			<div className={"pad"+(this.props.active ? " active" : "")}></div>
		);
	}
}

