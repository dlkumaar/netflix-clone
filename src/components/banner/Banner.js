import React, { useEffect, useState } from 'react';
import axios from './../../api/axios';
import requests from './../../api/Requests';

function Banner({ setShowTrailer, setvideoId }) {
	const [movie, setmovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals.url);
			setmovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}

		fetchData();
	}, []);

	const getVideoId = (id) => {
		setShowTrailer(true);

		async function fetchVideoId() {
			const request = await axios.get(
				`/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
			);
			setvideoId(request.data.results[0].key);
			// console.log(request.data.results[0].key);
			return request;
		}
		fetchVideoId();
	};

	// console.log(movie);

	return (
		<header
			style={{
				backgroundImage: `url('https://image.tmdb.org/t/p/original/${
					movie?.backdrop_path || movie?.poster_path
				}')`,
			}}
			className='bg-cover object-contain h-448 w-screen bg-no-repeat bg-center text-white'>
			<div className='ml-8 pt-36 h-48'>
				<h1 className='text-5xl font-extrabold pb-2'>
					{movie?.title ||
						movie?.original_title ||
						movie?.name ||
						movie?.original_name}
				</h1>
				<div className='mt-3'>
					<button
						onClick={() => getVideoId(movie?.id)}
						className='text-white font-bold cursor-pointer outline-none pl-8 pr-8 mr-4 pt-2 pb-2 bg-primary bg-opacity-75 rounded-sm hover:bg-secondary hover:text-black transition-all duration-200'>
						Play
					</button>
					<button className='text-white font-bold cursor-pointer outline-none pl-8 pr-8 mr-4 pt-2 pb-2 bg-primary bg-opacity-75 rounded-sm  hover:bg-secondary hover:text-black transition-all duration-200'>
						My List
					</button>
				</div>
				<p className='w-9/12 pt-4 text-base h-20 max-w-2xl break-words'>
					{movie.overview}
				</p>
			</div>

			<div className='h-64 bg-imaginary' />
		</header>
	);
}

export default Banner;
