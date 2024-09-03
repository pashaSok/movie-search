import {useState} from 'react'
import {fetchMovieBySearch} from '../api'
import {Slider} from './components/slider'
import {transformMovies} from './lib/format-data'

export const App = () => {
	const [movies, setMovies] = useState([])
	const [value, setValue] = useState('')

	const handleChange = (event) => {
		const value = event.currentTarget.value
		setValue(value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		fetchMovieBySearch({value}).then((movies) => {
			setMovies(transformMovies(movies))
		})
	}

	const handleSlideChanged = (slider) => {
		console.log(slider)
		const slideDetails = slider.track.details
		if (
			slideDetails.max - 1 > 1 &&
			slideDetails.position === slideDetails.max - 1
		) {
			fetchMovieBySearch({value}).then((movies) => {
				setMovies(transformMovies(movies))
			})
		}
	}
	console.log(movies)
	return (
		<div>
			<Slider data={movies} onSliderChanged={handleSlideChanged} />
			<form>
				<input onChange={handleChange} />
				<button onClick={handleSubmit}>search</button>
			</form>
		</div>
	)
}
