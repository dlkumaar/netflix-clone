import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import SignInForm from '../../components/signIn - form/SignInForm';

function Login() {
	const [signIn, setSignIn] = useState(false);

	const signInHandler = () => {
		setSignIn(true);
	};

	return (
		<div className='min-h-screen bg-login bg-cover bg-center bg-no-repeat flex justify-center items-center text-white text-center'>
			<Navbar signIn setSignIn={signInHandler} />

			{signIn ? (
				<SignInForm />
			) : (
				<div className='max-w-4xl p-20'>
					<h1 className='text-5xl max-w-xl font-bold leading-tight mb-2'>
						Unlimited movies, TV shows, and more.
					</h1>
					<h2 className='m-4 text-2xl max-w-xl font-normal'>
						Watch anywhere. Cancel anythime.
					</h2>
					<form className='flex flex-col items-center w-full'>
						<h3 className='pl-2 pr-2 max-w-xl  text-2xl font-normal'>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>

						<div className='mt-4 flex w-full flex-col justify-items-center items-center sm:flex-row'>
							<input
								type='email'
								placeholder='Email address'
								className='h-14 rounded p-3 text-gray-400 w-full outline-none'
							/>
							<button
								type='submit'
								className='bg-brand bg-opacity-75 text-base rounded-sm font-bold cursor-pointer pl-5 pr-5 mr-4 pt-2 pb-2 mt-4 hover: transition-all duration-200 hover:bg-opacity-100 sm:mt-0 h-14 w-1/2 sm:text-2xl'>
								Get Started
							</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}

export default Login;
