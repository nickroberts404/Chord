import React from 'react';
import Column from './column.js';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 0, 
			steps: 0
		};
	}

	componentDidMount() {
		window.setInterval(() => {
			this.setState({
				step: (this.state.steps + 1) % this.props.columns,
				steps: this.state.steps + 1
			});
		}, 1000)
	}

	render() {
		var columns = [];
		for (var i = 0; i < this.props.columns; i++) {
			columns.push(<Column rows={this.props.rows} active={i == this.state.step} />);
		}
		return (
			<div className="grid">
				{columns}
			</div>
		);
	}
}

