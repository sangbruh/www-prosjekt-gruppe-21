import React from 'react';
import {
	Typography
} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import './UserDetail.css';
import PROG2053Models from '../../../model-data/PhotoApp';


/**
 * Define UserDetail, a React componment of PROG2053 part #2
 */
class UserDetail extends React.Component {
	render() {
		return (
			<Typography variant="body1">
				{this.renderDetails(this.props.match.params.userId)}
				<p><a href={`/photo-share/photos/${this.props.match.params.userId}`}>View photos</a></p>
			</Typography>
		);
	}

	renderDetails = (userId) => {
		for (let i = 0; i < PROG2053Models.users.length; i++) {
			if (userId === PROG2053Models.users[i]._id) {
				return (
					<div>
						<h1>Details</h1>
						<p>First name: {PROG2053Models.users[i].first_name}</p>
						<p>Last name: {PROG2053Models.users[i].last_name}</p>
						<p>Location: {PROG2053Models.users[i].location}</p>
						<p>Description: {PROG2053Models.users[i].description}</p>
						<p>Occupation: {PROG2053Models.users[i].occupation}</p>
					</div>
				);
			}
		}
	};
}

export default withRouter(UserDetail);
