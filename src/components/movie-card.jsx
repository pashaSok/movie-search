export const MovieCard = ({title, poster}) => {
	return (
		<div>
			<div className="title">{title}</div>
			<img src={poster} className="poster" alt="" />
		</div>
	)
}
