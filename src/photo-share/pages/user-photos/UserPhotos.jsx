import React from 'react';
import {
	Typography
} from '@material-ui/core';
import './UserPhotos.css';
import PROG2053Models from '../../../model-data/PhotoApp';
import {withRouter} from 'react-router';


/**
 * Define UserPhotos, a React componment of PROG2053 part #2
 */
class UserPhotos extends React.Component {
	render() {
		return (
			<Typography variant="body1">
				{this.renderPhotos(this.props.match.params.userId)}
			</Typography>
		);
	}

	renderPhotos = (userId) => {
		const photos = [];

		for (let i = 0; i < PROG2053Models.photos.length; i++) {
			if (PROG2053Models.photos[i].user_id === userId) {
				photos.push(
					<img src={`/images/${PROG2053Models.photos[i].file_name}`}></img>,
					<p>Date/time: {PROG2053Models.photos[i].date_time}</p>,
					<p>Comment: {PROG2053Models.comments[i].comment}</p>,
					<p>Comment date/time: {PROG2053Models.comments[i].date_time}</p>,
					<p><a href={`/photo-share/users/${userId}`}>Comment creator</a></p>
				);
			}
		}

		return photos;
	};
}

export default withRouter(UserPhotos);
