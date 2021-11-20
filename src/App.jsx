import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import PhotoShare from './photo-share/PhotoShare';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<div className='container'>
							<h1>PROG2053 - Part 2</h1>
							<p>
								If you can see this message it means your simple CRA app is working!
							</p>
							<p>
								Your solutions to part2 should be served by this web server from the following files
								that can be clicked on to test in your browser:
							</p>
							<ul>
								<li>Photo Sharing App - <Link to="photo-share">photo-share</Link></li>
							</ul>
						</div>
					</Route>
					<Route path="/photo-share">
						<PhotoShare/>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
