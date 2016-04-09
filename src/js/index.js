import React from 'react';
import {render} from 'react-dom';
import App from './app.js';

class Jar extends React.Component {
	render() {
		return (
			<App />
		)
	}
}

render(<Jar />, document.getElementById('reactor'))
