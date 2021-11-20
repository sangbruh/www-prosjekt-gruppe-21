import React from 'react';
import {
	AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of PROG2053 part #2
 */
class TopBar extends React.Component {
	render() {
		return (
			<AppBar className="prog2053-topbar-appBar" position="absolute">
				<Toolbar>
					<Typography variant="h5" color="inherit">
						This is the TopBar component
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

export default TopBar;
