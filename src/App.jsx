import {useEffect, useState} from 'react'
import {fetchMovieBySearch, fetchMovieByTitle} from '../api'

export const App = () => {
	const [movies, setMovies] = useState([])
	const [value, setValue] = useState('')

	// useEffect(() => {
	// 	fetchMovieByTitle('batman')
	// 		.then((response) => response.json())
	// 		.then((data) => console.log(data))
	// }, [])
	const handleChange = (event) => {
		const value = event.currentTarget.value
		setValue(value)
	}

	const handleSubmit = () => {
		fetchMovieBySearch(value).then((movies) => {
			setMovies(movies)
		})
	}

	console.log(value)
	return (
		<div>
			<div>
				<input onChange={handleChange} />
				<button onClick={handleSubmit}>search</button>
			</div>
			<div>
				{movies.map((movie) => (
					<MovieCard key={movie.id} title={movie.title} poster={movie.poster} />
				))}
			</div>
		</div>
	)
}

const MovieCard = ({title, poster}) => {
	return (
		<div>
			<div>{title}</div>
			<img src={poster} alt="" />
		</div>
	)
}
