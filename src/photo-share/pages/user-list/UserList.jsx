import React from 'react';
import {
	Divider,
	List,
	ListItem,
	ListItemText,
	Typography
}
from '@material-ui/core';
import './UserList.css';
import PROG2053Models from '../../../model-data/PhotoApp';

/**
 * Define UserList, a React componment of PROG2053 part #2
 */
class UserList extends React.Component {
	render() {
		return (
			<div>
				{this.renderResults()}
			</div>
		);
	}

	constructor(props) {
		super(props);
		this.user = {
			users: PROG2053Models.userListModel(),
			errorMessage: null
		};
	}

	renderResults = () => {
		if (this.user.errorMessage !== null) {
			return <div>{this.user.errorMessage}</div>;
		}

		return (
			<List component="nav">
				{this.user.users.map((user) =>
					<li key={user._id}>
						<a href={`/photo-share/users/${user._id}`}><button>{user.first_name} {user.last_name}</button></a>
					</li>
				)}
			</List>
		);
	};
}

export default UserList;
