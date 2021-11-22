import React from 'react';
import {
	Typography,
	Grid,
	Divider
} from '@material-ui/core';
import './UserPhotos.css';
import PROG2053Models from '../../../model-data/PhotoApp';
import {withRouter} from 'react-router';


/**
 * Define UserPhotos, a React componment of PROG2053 part #2
 */
class UserPhotos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: PROG2053Models.photoOfUserModel(props.match.params.userId)
		};
		this.user = PROG2053Models.userModel(props.match.params.userId);
	}

	render() {
		return this.state.photos ? (
			<Grid container justify="space-evenly" alignItems="flex-start">
				{this.state.photos ? this.state.photos.map((photo) => (
					<Grid item xs={12} key={photo._id}>
						<Divider />
						<Typography>
							Photo created by {this.user.first_name} {this.user.last_name} ({photo.date_time})
						</Typography>
						<img src={`/images/${photo.file_name}`}></img>
						<Typography variant="body2" color="textSecondary">
							{photo.comments ?
								photo.comments.map((comment) => {
									return (
										<Grid container key={comment._id}>
											<Grid item xs={12}>
												<Divider />
												<button>
													<a href={`http://localhost:3000/photo-share/users/${comment.user._id}`}>
														{`${comment.user.first_name} ${comment.user.last_name}`}
													</a>
												</button>
											</Grid>
											<Grid item xs={4}>
												{comment.comment}
											</Grid>
											<Grid item xs={12}>
												(comment posted {comment.date_time})
											</Grid>
										</Grid>
									);
								}) :
								null}
						</Typography>
					</Grid>
				)) : <div/>}
			</Grid>
		) : (
			<div />
		);
	}
}

export default withRouter(UserPhotos);
