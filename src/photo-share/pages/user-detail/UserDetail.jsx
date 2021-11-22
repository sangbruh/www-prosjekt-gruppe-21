import React from 'react';
import {
	Typography,
	Grid,
	Button
} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import './UserDetail.css';
import fetchModel from '../../../lib/fetchModelData.js';


/**
 * Define UserDetail, a React componment of PROG2053 part #2
 */
class UserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: []
		};
		const promise = fetchModel(`/user/${this.props.match.params.userId}`);
		promise.then((response) => {
			this.setState({user: response.data});
		});
	}

	render() {
		return this.state.user ? (
			<Grid container justify="space-evenly" alignItems="center">
				<Grid xs={6} item>
					<Typography variant="h3">
						{`${this.state.user.first_name} ${this.state.user.last_name}`}
					</Typography>
					<Typography variant="h6">
						{this.state.user.occupation} <br />
						{this.state.user.location}
					</Typography>
					<Typography variant="body1">{this.state.user.description}</Typography>
				</Grid>
				<Grid xs={4} item>
					<Button variant="contained" size="large">
						<a href={`http://localhost:3000/photo-share/photos/${this.state.user._id}`}>View photos</a>
					</Button>
				</Grid>

			</Grid>
		) : (
			<div />
		);
	}
}

export default withRouter(UserDetail);
