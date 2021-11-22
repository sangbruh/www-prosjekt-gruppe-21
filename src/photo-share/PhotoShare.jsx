import React from 'react';
import {
	BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import {
	Grid, Paper
} from '@material-ui/core';

// import necessary components
import TopBar from './components/top-bar/TopBar';
import UserDetail from './pages/user-detail/UserDetail';
import UserList from './pages/user-list/UserList';
import UserPhotos from './pages/user-photos/UserPhotos';

class PhotoShare extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Grid container spacing={8}>
						<Grid item xs={12}>
							<TopBar/>
						</Grid>
						<div className="prog2053-main-topbar-buffer"/>
						<Grid item sm={3}>
							<Paper className="prog2053-main-grid-item">
								<UserList />
							</Paper>
						</Grid>
						<Grid item sm={9}>
							<Paper className="prog2053-main-grid-item">
								<Switch>
									<Route path="/photo-share/users/:userId">
										<UserDetail />
									</Route>
									<Route path="/photo-share/photos/:userId">
										<UserPhotos />
									</Route>
									<Route path="/photo-share/users">
										<UserList />
									</Route>
								</Switch>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</Router>
		);
	}
}

export default PhotoShare;
