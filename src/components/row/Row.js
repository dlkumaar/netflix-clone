import React, { useState, useEffect, useRef } from 'react';
import axios from './../../api/axios';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

function Row({
	title,
	fetchUrl,
	isLargeRow = false,
	setShowTrailer,
	setvideoId,
}) {
	const [movies, setmovies] = useState([]);

	const BASE_URL = 'https://image.tmdb.org/t/p/original/';

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setmovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	const scrollRef = useRef(null);

	const leftScroll = () => {
		scrollRef.current.scrollBy({
			top: 0,
			left: +380,
			behavior: 'smooth',
		});
	};

	const rightScroll = () => {
		scrollRef.current.scrollBy({
			top: 0,
			left: -380,
			behavior: 'smooth',
		});
	};

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

	return (
		<div className={`text-white ml-5 `}>
			{/*  */}
			<h2>{title}</h2>
			<div className='flex justify-between items-center relative'>
				<div
					className='mr-5 absolute left-10 bg-primary bg-opacity-75 z-10 p-2 cursor-pointer hover:bg-opacity-100 transition-all duration-200'
					onClick={leftScroll}>
					<ChevronLeftIcon className='h-5 mx-2' />
				</div>
				<div
					id='movies-container'
					ref={scrollRef}
					className={`flex overflow-y-hidden overflow-x-scroll scrollbar-hide p-5 `}>
					{movies.map(
						(movie) =>
							((isLargeRow && movie.poster_path) ||
								(!isLargeRow && movie.backdrop_path)) && (
								<img
									onClick={() => getVideoId(movie.id)}
									key={movie.id}
									src={`${BASE_URL}${
										isLargeRow ? movie.poster_path : movie.backdrop_path
									}`}
									className={` cursor-pointer max-h-28 object-contain mr-3 w-full  transition-transform duration-500 hover:scale-110 transform opacity-100 ${
										isLargeRow && 'max-h-64'
									}`}
									alt={movie.name}
								/>
							)
					)}
				</div>
				<div
					className='mr-5 ml-5 absolute right-5 bg-primary bg-opacity-75 p-2 cursor-pointer hover:bg-opacity-100 transition-all duration-200'
					onClick={rightScroll}>
					<ChevronRightIcon className='h-5 mx-2  ' />
				</div>
			</div>
		</div>
	);
}

export default Row;
