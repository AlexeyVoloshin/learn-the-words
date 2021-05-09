import {Spin} from 'antd';
import React, {Component} from 'react';

import s from './App.module.scss';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';


import {fire} from './services/firebase';

 

class AppComponent extends Component {
	state = {
		user: null,
	};

	componentDidMount() {
		console.log(fire);
		fire.auth().onAuthStateChanged((user) => {
			console.log('####: user', user.uid);
			if (user) {
				this.setState({
					user,
				});
			} else {
				this.setState({
					user: false
				});
			}
		});
		
	}

	render() {
		const {user} = this.state;

		if (user === null) {
			return (
				<div className={s.loader_wrap}>
					<Spin size="large"/>
				</div>
			);
		}
		return (
			<>
				{user ? <HomePage 
				user={user}/> : <LoginPage/>}
			</>
		);
	}
}

export default AppComponent;
