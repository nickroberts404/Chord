import React from 'react';
import {render} from 'react-dom';
import Grid from './grid/grid.js';

export default class App extends React.Component {
	render() {
		return (
			<Grid 
				rows={4}
				columns={4}
			/>
		)
	}
}
