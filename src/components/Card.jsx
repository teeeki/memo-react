function Card({ title, username, summary }) {
	return (
		<div className="card">
			<h2>{title}</h2>
			<p>作成者: {username}</p>
			<p>{summary}</p>
		</div>
	);
}

export default Card;