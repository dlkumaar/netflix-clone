import React, { useState, useEffect } from 'react';

function Navbar() {
	const [backgroundColor, setBackgroundColor] = useState(false);

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
				src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png'
				alt='site-logo'
				className='w-24 object-cover fixed left-6 cursor-pointer'
			/>

			<img
				src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
				alt='user-avatar'
				className='h-10 w-10 object-cover fixed right-6 cursor-pointer'
			/>
		</div>
	);
}

export default Navbar;
