import React, { useState } from 'react';
import Banner from '../../components/banner/Banner';
import Navbar from '../../components/navbar/Navbar';
import Row from '../../components/row/Row';

import requests from './../../api/Requests';

import { XIcon } from '@heroicons/react/outline';

function HomePage() {
	const [showTrailer, setShowTrailer] = useState(false);
	const [videoId, setvideoId] = useState('');

	const closePopupHandler = () => {
		setShowTrailer(false);
		return;
	};

	return (
		<div className='w-full'>
			{showTrailer && videoId && (
				<div className='w-screen h-screen bg-primary z-20 fixed text-white'>
					<XIcon
						onClick={closePopupHandler}
						className='cursor-pointer h-8 absolute right-1/4 top-custom-cross transform -translate-x-2/4 -translate-y-1/2 z-20 hover:transform hover:rotate-45'
					/>

					<iframe
						className='absolute  w-2/4  h-1/2  top-2/4 left-1/2 transform -translate-x-2/4 -translate-y-1/2 z-20'
						src={`https://www.youtube.com/embed/${videoId}`}
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						title='Embedded youtube'
					/>
				</div>
			)}

			<Navbar />
			<Banner setShowTrailer={setShowTrailer} setvideoId={setvideoId} />

			<Row
				title={requests.fetchTrending.title}
				fetchUrl={requests.fetchTrending.url}
				isLargeRow
				showTrailer={showTrailer}
				setShowTrailer={setShowTrailer}
				videoId={videoId}
				setvideoId={setvideoId}
			/>
			<Row
				title={requests.fetchNetflixOriginals.title}
				fetchUrl={requests.fetchNetflixOriginals.url}
				showTrailer={showTrailer}
				setShowTrailer={setShowTrailer}
				videoId={videoId}
				setvideoId={setvideoId}
			/>
			<Row
				title={requests.fetchTopRated.title}
				fetchUrl={requests.fetchTopRated.url}
				showTrailer={showTrailer}
				setShowTrailer={setShowTrailer}
				videoId={videoId}
				setvideoId={setvideoId}
			/>
			<Row
				title={requests.fetchActionMovies.title}
				fetchUrl={requests.fetchActionMovies.url}
				showTrailer={showTrailer}
				setShowTrailer={setShowTrailer}
				videoId={videoId}
				setvideoId={setvideoId}
			/>
			<Row
				title={requests.fetchComedyMovies.title}
				fetchUrl={requests.fetchComedyMovies.url}
				showTrailer={showTrailer}
				setShowTrailer={setShowTrailer}
				videoId={videoId}
				setvideoId={setvideoId}
			/>
			<Row
				title={requests.fetchHorrorMovies.title}
				fetchUrl={requests.fetchHorrorMovies.url}
				showTrailer={showTrailer}
				setShowTrailer={setShowTrailer}
				videoId={videoId}
				setvideoId={setvideoId}
			/>
			<Row
				title={requests.fetchRomanceMovies.title}
				fetchUrl={requests.fetchRomanceMovies.url}
				showTrailer={showTrailer}
				setShowTrailer={setShowTrailer}
				videoId={videoId}
				setvideoId={setvideoId}
			/>
			<Row
				title={requests.fetchMystery.title}
				fetchUrl={requests.fetchMystery.url}
				showTrailer={showTrailer}
				setShowTrailer={setShowTrailer}
				videoId={videoId}
				setvideoId={setvideoId}
			/>
			<Row
				title={requests.fetchSciFi.title}
				fetchUrl={requests.fetchSciFi.url}
				showTrailer={showTrailer}
				setShowTrailer={setShowTrailer}
				videoId={videoId}
				setvideoId={setvideoId}
			/>
			<Row
				title={requests.fetchWestern.title}
				fetchUrl={requests.fetchWestern.url}
				showTrailer={showTrailer}
				setShowTrailer={setShowTrailer}
				videoId={videoId}
				setvideoId={setvideoId}
			/>
			<Row
				title={requests.fetchAnimation.title}
				fetchUrl={requests.fetchAnimation.url}
				showTrailer={showTrailer}
				setShowTrailer={setShowTrailer}
				videoId={videoId}
				setvideoId={setvideoId}
			/>
			<Row
				title={requests.fetchTV.title}
				fetchUrl={requests.fetchTV.url}
				showTrailer={showTrailer}
				setShowTrailer={setShowTrailer}
				videoId={videoId}
				setvideoId={setvideoId}
			/>
		</div>
	);
}

export default HomePage;
