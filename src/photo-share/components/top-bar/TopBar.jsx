import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Grid
} from '@material-ui/core';
import './TopBar.css';
import fetchModel from '../../../lib/fetchModelData.js';

/**
 * Define TopBar, a React componment of PROG2053 part #2
 */
class TopBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: []
		};

		const promise = fetchModel(`/user/${window.location.pathname.split('/').pop()}`);
		promise.then((response) => {
			this.setState({user: response.data});
		});
	}

	render() {
		return (
			<AppBar className="prog2053-topbar-appBar" position="absolute">
				<Toolbar>
					<Grid container direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="h5" color="inherit">
							Sang, Daniel, Mats and Håvard
						</Typography>
						<Typography variant="h5">
							{this.displayDescription(window.location.pathname)}
						</Typography>
					</Grid>
				</Toolbar>
			</AppBar>
		);
	}

	displayDescription = (pathname) => {
		const fullName = `${this.state.user.first_name} ${this.state.user.last_name}`;

		if (pathname.search('users') !== -1) {
			return `Details of ${fullName}`;
		}
		return `Photos of ${fullName}`;
	};
}

export default TopBar;
