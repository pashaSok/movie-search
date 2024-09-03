const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const fetchMovieByTitle = (title) =>
	fetch(`${BASE_URL}?apikey=${API_KEY}&t=${title}`)

const movieDTO = (movie) => {
	return {
		id: movie.imdbID,
		title: movie.Title,
		poster: movie.Poster,
	}
}

// const logger = (type) => (value) => {
// 	console.log(`%c ${type}:`, 'color: #fff; background-color: #50b5ff')
// 	console.log(value)
// }

export const fetchMovieBySearch = ({value, page}) =>
	fetch(`${BASE_URL}?apikey=${API_KEY}&s=${value}&page=${page}`)
		.then((response) => response.json())
		.then((data) => data.Search.map(movieDTO))
