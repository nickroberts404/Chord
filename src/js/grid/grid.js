import React from 'react';
import _ from 'lodash';
import Column from './column.js';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 0, 
			steps: 0,
			grid: props.grid
		};
	}

	componentDidMount() {
		console.log(this.state.grid);
		window.setInterval(() => {
			this.setState({
				step: (this.state.steps + 1) % this.props.columns,
				steps: this.state.steps + 1
			});
		}, this.props.tempo)
	}

	togglePad(column, row) {
		console.log(column, row);
		var grid = _.cloneDeep(this.state.grid);
		grid[column][row] = !this.state.grid[column][row];
		this.setState({grid: grid})
	}

	render() {
		var columns = [];
		for (var i = 0; i < this.props.columns; i++) {
			columns.push(<Column 
				column={this.state.grid[i]}
				columnNum={i}
				rows={this.props.rows} 
				active={i == this.state.step} 
				togglePad={this.togglePad.bind(this)}
			/>);
		}
		return (
			<div className="grid">
				{columns}
			</div>
		);
	}
}

