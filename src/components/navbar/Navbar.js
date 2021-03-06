import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

function Navbar({ signIn, setSignIn }) {
	const [backgroundColor, setBackgroundColor] = useState(false);

	const history = useHistory();

	const handleNavBackground = () => {
		if (window.scrollY > 100) {
			setBackgroundColor(true);
		} else {
			setBackgroundColor(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleNavBackground);
		return () => window.removeEventListener('scroll', handleNavBackground);
	}, []);

	return (
		<div
			className={`flex justify-between items-center w-screen h-20 ${
				backgroundColor ? 'bg-primary' : ''
			} fixed top-0 z-50 transition-all ease-in-out`}>
			<img
				onClick={() => history.push('/')}
				src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png'
				alt='site-logo'
				className='w-24 object-cover fixed left-8 cursor-pointer'
			/>

			{signIn ? (
				<button
					onClick={setSignIn}
					className='fixed right-6 text-white font-bold cursor-pointer outline-none pl-5 pr-5 mr-4 pt-2 pb-2 bg-brand bg-opacity-75 rounded-sm  hover: transition-all duration-200 hover:bg-opacity-100'>
					Sign In
				</button>
			) : (
				<img
					onClick={() => history.push('/profile')}
					src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
					alt='user-avatar'
					className='h-10 w-10 object-cover fixed right-6 cursor-pointer'
				/>
			)}
		</div>
	);
}

export default Navbar;
