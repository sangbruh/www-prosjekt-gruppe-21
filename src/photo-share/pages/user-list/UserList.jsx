import React from 'react';
import {
	Divider,
	List,
	ListItem,
	ListItemText
}
from '@material-ui/core';
import './UserList.css';
import fetchModel from '../../../lib/fetchModelData.js';

/**
 * Define UserList, a React componment of PROG2053 part #2
 */
class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
		const promise = fetchModel('/user/list');
		promise.then((response) => {
			this.setState({users: response.data});
		});
	}

	render() {
		return this.state.users ? (
			<div>
				<List component="nav">
					{this.state.users.map((user) => {
						return (
							<a className="name" href={`http://localhost:3000/photo-share/users/${user._id}`} key={user._id}>
								<Divider />
								<ListItem>
									<ListItemText
										primary={`${user.first_name} ${user.last_name}`}
									/>
								</ListItem>
							</a>
						);
					})}
				</List>
			</div>
		) : (
			<div />
		);
	}
}

export default UserList;
