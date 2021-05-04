import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase/firebase';

function ProfilePage() {
	const user = useSelector(selectUser);
	const history = useHistory();

	return (
		<div
			className='min-h-screen bg-primary flex justify-center items-center 
    text-white text-center'>
			<Navbar />

			<div className='flex flex-col w-1/2 mx-auto max-w-3xl'>
				<h1 className='text-5xl text-left'>Edit profile</h1>
				<div className='mt-6 flex'>
					{/* profile image */}
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
						alt='user-avatar'
						className='h-24 w-24 object-cover cursor-pointer'
					/>

					{/* user details */}
					<div className='ml-6 flex flex-col w-full items-start text-left'>
						<h2 className='bg-email w-full p-4'>{user.email}</h2>
						{/* plans */}
						<div className='w-full'>
							<h3 className='border-t border-b border-gray-500 w-full my-3 py-3 text-xl'>
								Plans
							</h3>

							{/* sign out button */}
							<button
								onClick={() => auth.signOut()}
								className='text-white font-bold cursor-pointer outline-none pl-5 pr-5 mr-4 pt-2 pb-2 bg-brand bg-opacity-75 rounded-sm  hover: transition-all duration-200 hover:bg-opacity-100'>
								Sign out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
