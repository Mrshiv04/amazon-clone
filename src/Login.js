import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = (event) => {
		event.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((e) => alert(e.message));
	};

	const register = (event) => {
		event.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((e) => alert(e.message));
	};

	return (
		<div className='login'>
			<Link to='/'>
				<img
					className='login_logo'
					src='https://pngimg.com/uploads/amazon/amazon_PNG6.png'
					alt=''
				/>
			</Link>
			<div className='login_container'>
				<h1>Sign in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type='text'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						placeholder='Enter email'
					/>
					<h5>Password</h5>
					<input
						type='password'
						onChange={(event) => setPassword(event.target.value)}
						value={password}
						placeholder='password'
					/>
					<button onClick={login} type='submit' className='login_singInButton'>
						Sign In
					</button>
				</form>
				<p>
					By continuing, you agree to Amazon's Conditions of Use and Privacy
					Notice.
				</p>
				<button onClick={register} className='login_register_button'>
					Create your Amazon account
				</button>
			</div>
		</div>
	);
}

export default Login;
