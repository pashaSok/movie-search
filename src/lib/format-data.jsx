const size = 4

export const transformMovies = (data) => {
	const arr = []
	for (let i = 0; i < data.length; i += size) {
		arr.push(data.slice(i, i + size))
	}

	return arr
}
