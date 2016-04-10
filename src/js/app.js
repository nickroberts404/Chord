import React from 'react';
import {render} from 'react-dom';
import Grid from './grid/grid.js';
var rows = 5;
var columns = 5;

export default class App extends React.Component {
	render() {
		return (
			<Grid 
				rows={5}
				columns={5}
				grid={createGrid(rows, columns)}
				tempo={500}
			/>
		)
	}
}

function createGrid(row, column) {
	var grid = [];
	for (var i = 0; i < column; i++) {
		var col = [];
		for(var j = 0; j < row; j++) {
			col.push(false);
		}
		grid.push(col);
	}
	return grid;
}
