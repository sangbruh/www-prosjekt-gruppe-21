import React from 'react';
import {
	AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';
import PROG2053Models from '../../../model-data/PhotoApp';

/**
 * Define TopBar, a React componment of PROG2053 part #2
 */
class TopBar extends React.Component {
	render() {
		return (
			<AppBar className="prog2053-topbar-appBar" position="absolute">
				<Toolbar className="prog2053-topbar-toolbar">
					<Typography variant="h5">
						Sang, Daniel, Håvard og Mats
					</Typography>
					<Typography variant="h5">
						{this.renderDescription()}
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}

	renderDescription = () => {
		const descriptions = [];

		for (let i = 0; i < PROG2053Models.users.length; i++) {
			descriptions.push({
				path: `/photo-share/users/${PROG2053Models.users[i]._id}`,
				type: 'Details',
				name: `${PROG2053Models.users[i].first_name} ${PROG2053Models.users[i].last_name}`
			});

			descriptions.push({
				path: `/photo-share/photos/${PROG2053Models.users[i]._id}`,
				type: 'Photos',
				name: `${PROG2053Models.users[i].first_name} ${PROG2053Models.users[i].last_name}`
			});
		}

		for (let i = 0; i < descriptions.length; i++) {
			if (window.location.pathname === descriptions[i].path) {
				return `${descriptions[i].type} of ${descriptions[i].name}`;
			}
		}
	};
}

export default TopBar;
