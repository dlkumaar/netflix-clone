import React, { useRef } from 'react';
import {
	signUpWithEmailPassword,
	signInWithEmailPassword,
} from './../../firebase/firebase';

function SignInForm() {
	const email = useRef();
	const password = useRef();

	const signUp = (e) => {
		e.preventDefault();
		signUpWithEmailPassword(email.current.value, password.current.value);
	};

	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailPassword(email.current.value, password.current.value);
	};

	return (
		<div className='w-full max-w-md p-12 bg-primary bg-opacity-80 sm:p-16'>
			<form className='w-full grid grid-cols-1'>
				<h1 className='text-3xl text-left'>Sign In</h1>
				<input
					ref={email}
					type='email'
					placeholder='Email address'
					className='h-10 mt-5 rounded p-3 text-gray-400 outline-none'
				/>

				<input
					ref={password}
					type='password'
					placeholder='Password'
					className='mt-4 mb-6 h-10 rounded p-3 text-gray-400  outline-none'
				/>
				<button
					type='submit'
					onClick={signIn}
					className='w-full mx-auto bg-brand bg-opacity-75 text-base rounded-sm font-bold cursor-pointer pl-5 pr-5 pt-2 pb-2 hover: transition-all duration-200 hover:bg-opacity-100 h-14 sm:text-xl'>
					Sign In
				</button>

				<h4 className='mt-6 text-left text-gray-400'>
					New to Netflix?{' '}
					<span
						onClick={signUp}
						className='text-white font-bold cursor-pointer hover:underline'>
						Sign Up now.
					</span>
				</h4>
			</form>
		</div>
	);
}

export default SignInForm;
